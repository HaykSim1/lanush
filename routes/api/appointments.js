const dayjs = require('dayjs');
const Worker = require('../../models/Worker');
const History = require('../../models/History');
const Price = require('../../models/ServicePrice');
const auth = require('../../middleware/auth');
const mailer = require('../../libs/mailer');

module.exports = (app) => {
  app.get('/api/appointments', auth, async (req, res, next) => {

    History.find()
      .populate('clientId')
      .exec()
      .then((appointments) => res.status(200).json(appointments))
      .catch((err) => next(err));
  });

  app.put('/api/appointments/:id', auth, async (req, res, next) => {
    const startDate = dayjs(req.body.time);

    const services = await Price.find({
      '_id': { $in: req.body.serviceIds }
    });

    const timeEnd = startDate.add(req.body.duration, 'm').toDate();

    const updated = { ...req.body, timeEnd };

    const history = await History.findById(req.params.id);

    if (history.emailSent && history.status !== updated.status && updated.status !== 0) {
      const serviceList = services.map(item => item.title);

      const person = await Worker.findById(req.body.worker);

      const texts = {};

      if (req.body.status === 1) {
        texts.text = `Hallo ${req.body.clientId.name}, \n Ihr Termin wurde gebucht.`;
      } else {
        texts.text = `Hallo ${req.body.clientId.name}, \n La'Nush Laser&BeautyCenter musste Ihren Termin leider stornieren.`;
        texts.footerText = `Buchen Sie gleich einen neuen Termin. Das Team von La'Nush Laser&BeautyCenter freut sich auf Ihren Besuch!`;
      }

      await mailer.sendEmail({
        to: req.body.clientId.email,
        startDate,
        endDate: startDate.add(history.duration, 'm'),
        service: serviceList.join(', '),
        worker: person ? person.name : 'Irgendein',
        ...texts,
      });
    }

    History.findByIdAndUpdate(req.params.id, updated)
      .then(() => {
        res.status(200).json(updated);
      })
      .catch((err) => next(err));
  });

  app.post('/api/appointments', auth, async (req, res, next) => {
    const { history, ...client } = req.body;

    const newHistory = new History({ ...history, clientId: client._id });

    await newHistory.save();

    if (!history.emailSent) return res.status(200).json(newHistory);

    const startDate = dayjs(history.time);

    const services = await Price.find({
      '_id': { $in: history.serviceIds }
    });

    const serviceList = services.map(item => item.title);

    const person = await Worker.findById(history.worker);

    const texts = {};

    if (history.status === 1) {
      texts.text = `Hallo ${client.name}, \n Ihr Termin wurde gebucht.`;
    } else {
      texts.text = `Hallo ${client.name}, \n La'Nush Laser&BeautyCenter musste Ihren Termin leider stornieren.`;
      texts.footerText = `Buchen Sie gleich einen neuen Termin. Das Team von La'Nush Laser&BeautyCenter freut sich auf Ihren Besuch!`;
    }

    await mailer.sendEmail({
      to: client.email,
      startDate,
      endDate: startDate.add(history.duration, 'm'),
      service: serviceList.join(', '),
      worker: person ? person.name : 'Irgendein',
      ...texts,
    });

    return res.status(200).json(newHistory);
  });

  app.delete('/api/appointments/:id', auth, async (req, res, next) => {
    await History.findByIdAndRemove(req.params.id);
    return res.status(200).json({});
  });
};
