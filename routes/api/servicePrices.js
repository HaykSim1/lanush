const ServicePrice = require('../../models/ServicePrice');
const auth = require('../../middleware/auth');

module.exports = (app) => {
  app.get('/api/prices', auth, (req, res, next) => {
    ServicePrice.find()
    .sort('-order')
      .exec()
      .then((prices) => res.status(200).json(prices))
      .catch((err) => next(err));
  });

  app.post('/api/prices', auth, (req, res, next) => {
    const price = new ServicePrice(req.body);

    price.save()
      .then(() => res.json(price))
      .catch((err) => next(err));
  });

  app.put('/api/prices/:id', auth, (req, res, next) => {
    ServicePrice.findByIdAndUpdate(req.params.id, req.body)
    .sort('-order')
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch((err) => next(err));
  });

  app.delete('/api/prices/:id', auth, (req, res, next) => {
    ServicePrice.findByIdAndRemove(req.params.id, req.body)
    .sort('-order')
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => next(err));
  });
};
