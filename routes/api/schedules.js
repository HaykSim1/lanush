const Schedules = require('../../models/Schedule');
const Client = require('../../models/Client');
const auth = require('../../middleware/auth');

module.exports = (app) => {

  app.get('/api/schedules', auth, (req, res, next) => {
    Schedules.find()
      .exec()
      .then((schedules) => res.status(200).json(schedules))
      .catch((err) => next(err));
  });

  app.post('/api/schedules', auth, (req, res, next) => {
    const {
      title,
      rRule,
      notes,
      phone,
      startDate,
      endDate,
      additional: {
        name,
        email,
        worker,
        serviceIds,
        total,
      }
    } = req.body;

    const schedule = new Schedules({
      title,
      rRule,
      notes,
      phone,
      startDate,
      endDate,
    });

    schedule.save()
      .then(() => {
        const client = new Client({
          name,
          phone,
          email,
          worker,
          serviceIds,
          note: notes,
          time: new Date(startDate),
          total,
          scheduleId: schedule._id,
          lastName: ' ',
          birthday: ' ',
          post: ' ',
          city: ' ',
          address: ' ',
          homeNumber: ' ',
          additionalAddress: ' ',
        });

        client.save().then(() => res.status(200).json(schedule));
      })
      .catch((err) => next(err));
  });

  app.put('/api/schedules/:id', auth, (req, res, next) => {
    Schedules.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        Client.updateOne({scheduleId: req.params.id}, {
          ...req.body.additional,
          phone: req.body.phone,
        }).then(() => res.status(200).json(req.body));
      })
      .catch((err) => next(err));
  });

  app.delete('/api/schedules/:id', auth, async (req, res, next) => {
    Schedules.findByIdAndRemove(req.params.id, req.body)
    .then(() => {
      Client.updateOne({ scheduleId: req.params.id }, { status: 0 })
      .then(() => res.status(200).json(req.body));
    })
    .catch((err) => next(err));
  });
};
