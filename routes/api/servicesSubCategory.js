const SubCategory = require('../../models/ServiceSubCategory');
const Price = require('../../models/ServicePrice');
const auth = require('../../middleware/auth');

module.exports = (app) => {
  app.get('/api/subcategories', auth, (req, res, next) => {
    SubCategory.find()
    .sort('-order')
      .exec()
      .then((categories) => res.status(200).json(categories))
      .catch((err) => next(err));
  });

  app.post('/api/subcategories', auth, (req, res, next) => {
    const category = new SubCategory(req.body);

    category.save()
      .then(() => res.json(category))
      .catch((err) => next(err));
  });

  app.put('/api/subcategories/:id', auth, (req, res, next) => {
    SubCategory.findByIdAndUpdate(req.params.id, req.body)
    .sort('-order')
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch((err) => next(err));
  });

  app.delete('/api/subcategories/:id', auth, (req, res, next) => {
    SubCategory.findByIdAndRemove(req.params.id)
    .sort('-order')
    .then(() => {
      Price.updateMany({ subCategoryId: req.params.id }, {"$set":{"subCategoryId": null}}).then(() => {
        res.status(200).json({ _id: req.params.id });
      })
    })
    .catch((err) => next(err));
  });
};
