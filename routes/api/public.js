const dayjs = require('dayjs');
const mailer = require('../../libs/mailer');
const Text = require('../../models/Text');
const Worker = require('../../models/Worker');
const History = require('../../models/History');
const Slider = require('../../models/Slider');
const Client = require('../../models/Client');
const Service = require('../../models/Service');
const Price = require('../../models/ServicePrice');
const Category = require('../../models/ServiceCategory');

module.exports = (app) => {
  app.get('/api/public/texts', (req, res, next) => {
    Text.find()
    .sort('-order')
      .exec()
      .then((texts) => res.status(200).json(texts))
      .catch((err) => next(err));
  });

  app.get('/api/public/workers', (req, res, next) => {
    Worker.find()
    .sort('-order')
    .exec()
    .then((workers) => res.status(200).json(workers))
    .catch((err) => next(err));
  });

  app.get('/api/public/schedules', (req, res, next) => {
    History.find()
    .exec()
    .then((schedules) => res.status(200).json(schedules))
    .catch((err) => next(err));
  });

  app.get('/api/public/service-pages', (req, res, next) => {
    Service.find()
    .sort('-order')
    .exec()
    .then((services) => res.status(200).json(services))
    .catch((err) => next(err));
  });

  app.get('/api/public/services', (req, res, next) => {
    Category.find()
    .sort('-order')
    .exec()
    .then( async (categories) => {
      const result = [];

      for (const cat of categories) {
        const catObj = { ...cat };
        catObj.services = await Price.find({ categoryId: cat._id }).sort('-order').exec();
        result.push(catObj);
      }

      return res.status(200).json(result);
    })
    .catch((err) => next(err));
  });

  app.post('/api/public/schedules', async (req, res, next) => {
    const { user, serviceIds, worker, time, ...rest } = req.body;

    const startDate = dayjs(time);

    const services = await Price.find({
      '_id': { $in: serviceIds }
    });
    const serviceList = [];
    const duration = services.reduce((acc, elem) => {
      serviceList.push(elem.title);
      return acc + elem.duration;
    }, 0);
    const timeEnd = startDate.add(duration, 'm').toDate();
    const person = await Worker.findById(worker);

    let client = await Client.findOne({ email: user.email }).exec();

    if (!client) {
      client = new Client(user);

      await client.save();
    }

    const history = new History({ ...rest, worker, serviceIds, time, timeEnd, note: user.note, clientId: client._id, duration });

    await history.save();

    mailer.sendEmail({
      to: user.email,
      startDate,
      endDate: startDate.add(duration, 'm'),
      service: serviceList.join(', '),
      worker: person ? person.name : 'Irgendein',
      text: "Lieber Kunde, hiermit möchten wir Sie an Ihren Termin bei uns La'Nush erinnern",
    });

    return res.status(200).json(history);
  });

  app.post('/api/public/contact-submit', (req, res, next) => {
    mailer.contactEmail(req.body);

    res.status(200);
  });

  app.get('/api/public/sliders', (req, res, next) => {
    Slider.find()
    .sort('-order')
    .exec()
    .then((sliders) => res.status(200).json(sliders))
    .catch((err) => next(err));
  });
};

