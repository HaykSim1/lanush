const dayjs = require('dayjs');

const Text = require('../../models/Text');
const Worker = require('../../models/Worker');
const Slider = require('../../models/Slider');
const Client = require('../../models/Client');
const Service = require('../../models/Service');
const Schedule = require('../../models/Schedule');
const Price = require('../../models/ServicePrice');
const User = require('../../models/User');
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
    Schedule.find()
    .sort('-order')
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
    const { user, serviceIds, worker, time, total } = req.body;
    const client = new Client({ ...user, serviceIds, worker, time, total });
    await client.save();

    const workerFull = worker ? await Worker.findById(worker) : { name: 'Any' };

    const title = `Book from ${user.name}, Total: ${total}`;
    const note = `Name: ${user.name}, Phone: ${user.phone}, Email: ${user.email}, Worker: ${workerFull.name}`;
    const phone = user.phone;
    const startDate = dayjs(time);

    const services = await Price.find({
      '_id': { $in: serviceIds }
    });

    const duration = services.reduce((acc, elem) => acc + elem.duration, 0);
    const endDate = startDate.add(duration, 'm').toDate();

    const schedule = new Schedule({ title, note, phone, startDate, endDate, total });

    await schedule.save();
    await Client.findByIdAndUpdate(client._id, { scheduleId: schedule._id });
    return res.status(200).json(schedule);
  });

  app.get('/api/public/sliders', (req, res, next) => {
    Slider.find()
    .sort('-order')
    .exec()
    .then((sliders) => res.status(200).json(sliders))
    .catch((err) => next(err));
  });
};

