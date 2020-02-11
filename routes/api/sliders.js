const fs = require('fs');

const Slider = require('../../models/Slider');
const upload = require('../../middleware/uploader');
const auth = require('../../middleware/auth');

module.exports = (app) => {
  app.get('/api/sliders', auth, async (req, res, next) => {
    //await Slider.updateMany({}, { isSlide: true });
    Slider.find()
      .exec()
      .then((sliders) => res.status(200).json(sliders))
      .catch((err) => next(err));
  });

  app.post('/api/sliders', auth, upload.single('image'), (req, res, next) => {
    const slider = new Slider({ ...req.body, image: req.file ? req.file.path : '' });

    slider.save()
    .then(() => res.json(slider))
    .catch((err) => next(err));
  });

  app.put('/api/sliders/:id', auth, upload.single('image'), (req, res, next) => {
    const updated = { ...req.body, isSlide: req.body.isSlide !== 'false' };
    if (req.file) {
      updated.image = req.file.path;
    }
    Slider.findByIdAndUpdate(req.params.id, updated)
    .then(() => {
      res.status(200).json(updated);
    })
    .catch((err) => next(err));
  });

  app.put('/api/sliders/main/:id', auth, async (req, res, next) => {
    await Slider.update({ _id: req.params.id}, { isSlide: !req.body.checked });

    Slider.find()
    .exec()
    .then((sliders) => res.status(200).json(sliders))
    .catch((err) => next(err));
  });

  app.delete('/api/sliders/:id', auth, async (req, res, next) => {
    const slider = await Slider.findById(req.params.id);
    const exist = await fs.existsSync(slider.image);

    exist && await fs.unlinkSync(slider.image);

    await slider.remove();
    res.status(200).json({});
  });
};
