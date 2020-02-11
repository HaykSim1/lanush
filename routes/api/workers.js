const Worker = require('../../models/Worker');
const auth = require('../../middleware/auth');

module.exports = (app) => {
  app.get('/api/workers', auth, (req, res, next) => {
    Worker.find()
      .exec()
      .then((workers) => res.status(200).json(workers))
      .catch((err) => next(err));
  });

  app.post('/api/workers', auth, (req, res, next) => {
    const worker = new Worker(req.body);

    worker.save()
      .then(() => res.json(worker))
      .catch((err) => next(err));
  });

  app.put('/api/workers/:id', auth, (req, res, next) => {
    Worker.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch((err) => next(err));
  });

  app.delete('/api/workers/:id', auth, (req, res, next) => {
    Worker.findByIdAndRemove(req.params.id, req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => next(err));
  });


};
