const Text = require('../../models/Text');
const auth = require('../../middleware/auth');

module.exports = (app) => {
  app.get('/api/texts', auth, (req, res, next) => {
    Text.find()
      .exec()
      .then((texts) => res.status(200).json(texts))
      .catch((err) => next(err));
  });

  app.put('/api/texts', auth, (req, res, next) => {
    const texts = [ ...req.body ];

    const promises = texts.map(item => {
      return Text.findOneAndUpdate({ key: item.key }, item, { upsert: true });
    });

    Promise.all(promises)
      .then(() => res.json(texts))
      .catch(err => next(err));
  });
};
