const Category = require('../../models/ServiceCategory');
const Price = require('../../models/ServicePrice');

module.exports = (app) => {
  app.get('/api/categories', (req, res, next) => {
    Category.find()
    .sort('-order')
      .exec()
      .then((categories) => res.status(200).json(categories))
      .catch((err) => next(err));
  });

  app.post('/api/categories', (req, res, next) => {
    const category = new Category(req.body);

    category.save()
    .sort('-order')
      .then(() => res.json(category))
      .catch((err) => next(err));
  });

  app.put('/api/categories/:id', (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body)
    .sort('-order')
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch((err) => next(err));
  });

  app.delete('/api/categories/:id', (req, res, next) => {
    Category.findByIdAndRemove(req.params.id)
    .sort('-order')
    .then(() => {
      Price.deleteMany({ categoryId: req.params.id }).then(() => {
        res.status(200).json({ _id: req.params.id });
      })
    })
    .catch((err) => next(err));
  });
};
