const ServicePrice = require('../../models/ServicePrice');

module.exports = (app) => {
  app.get('/api/prices', (req, res, next) => {
    ServicePrice.find()
    .sort('-order')
      .exec()
      .then((prices) => res.status(200).json(prices))
      .catch((err) => next(err));
  });

  app.post('/api/prices', (req, res, next) => {
    const price = new ServicePrice(req.body);

    price.save()
    .sort('-order')
      .then(() => res.json(price))
      .catch((err) => next(err));
  });

  app.put('/api/prices/:id', (req, res, next) => {
    ServicePrice.findByIdAndUpdate(req.params.id, req.body)
    .sort('-order')
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch((err) => next(err));
  });

  app.delete('/api/prices/:id', (req, res, next) => {
    ServicePrice.findByIdAndRemove(req.params.id, req.body)
    .sort('-order')
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => next(err));
  });
};
