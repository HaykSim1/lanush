const dayjs = require('dayjs');
const Client = require('../../models/Client');
const Worker = require('../../models/Worker');
const Price = require('../../models/ServicePrice');
const auth = require('../../middleware/auth');
const mailer = require('../../libs/mailer');

module.exports = (app) => {
  app.get('/api/appointments', auth, (req, res, next) => {
    Client.find()
      .exec()
      .then((clients) => res.status(200).json(clients))
      .catch((err) => next(err));
  });

  app.put('/api/appointments/:id', auth, async (req, res, next) => {
    const startDate = dayjs(req.body.time);

    const services = await Price.find({
      '_id': { $in: req.body.serviceIds }
    });

    const serviceList = [];
    const duration = services.reduce((acc, elem) => {
      serviceList.push(elem.title);
      return acc + elem.duration;
    }, 0);

    const timeEnd = startDate.add(duration, 'm').toDate();

    const updated = { ...req.body, timeEnd };

    const client = await Client.findById(req.params.id);

    if (client.status !== updated.status && updated.status !== 0) {
      const person = await Worker.findById(updated.worker);

      const texts = {};

      if (updated.status === 1) {
        texts.text = `Hallo ${client.name}, \n Ihr Termin wurde gebucht.`;
      } else {
        texts.text = `Hallo ${client.name}, \n La'Nush Laser&BeautyCenter musste Ihren Termin leider stornieren.`;
        texts.footerText = `Buchen Sie gleich einen neuen Termin. Das Team von La'Nush Laser&BeautyCenter freut sich auf Ihren Besuch!`;
      }

      await mailer.sendEmail({
        to: client.email,
        startDate,
        endDate: startDate.add(duration, 'm'),
        service: serviceList.join(', '),
        worker: person ? person.name : 'Irgendein',
        ...texts,
      });
    }


    Client.findByIdAndUpdate(req.params.id, updated)
      .then(() => {
        res.status(200).json(updated);
      })
      .catch((err) => next(err));
  });

  app.post('/api/appointments', auth, async (req, res, next) => {
    const { serviceIds, time, name } = req.body;


    const startDate = dayjs(time);

    const services = await Price.find({
      '_id': { $in: serviceIds }
    });

    const duration = services.reduce((acc, elem) => acc + elem.duration, 0);
    const timeEnd = startDate.add(duration, 'm').toDate();

    const client = new Client({ ...req.body, time, name: name.split(' ')[0], lastName: name.split(' ')[1] || '', timeEnd });
    await client.save();
    return res.status(200).json(client);
  });
};
