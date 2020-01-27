const Client = require('../../models/Client');

module.exports = (app) => {
  app.get('/api/appointments', (req, res, next) => {
    Client.find()
      .exec()
      .then((clients) => res.status(200).json(clients))
      .catch((err) => next(err));
  });

  app.put('/api/appointments/:id', (req, res, next) => {
    const updated = { ...req.body };
    if (req.file) {
      updated.image = req.file.path;
    }
    Client.findByIdAndUpdate(req.params.id, updated)
      .then(() => {
        res.status(200).json(updated);
      })
      .catch((err) => next(err));
  });
};
