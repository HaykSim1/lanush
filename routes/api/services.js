const fs = require('fs');

const Service = require('../../models/Service');
const upload = require('../../middleware/uploader');

module.exports = (app) => {
  app.get('/api/services', (req, res, next) => {
    Service.find({ disabled: false })
    .sort('-order')
      .exec()
      .then((services) => res.status(200).json(services))
      .catch((err) => next(err));
  });

  app.get('/api/services/:id', (req, res, next) => {
    Service.findById(req.params.id)
    .sort('-order')
    .exec()
    .then((service) => res.status(200).json(service))
    .catch((err) => next(err));
  });

  app.post('/api/services', upload.single('image'), (req, res, next) => {
    const service = new Service({ ...req.body, image: req.file ? req.file.path : '' });

    service.save()
    .sort('-order')
      .then(() => res.json(service))
      .catch((err) => next(err));
  });

  app.put('/api/services/:id', upload.single('image'), (req, res, next) => {
    const updated = { ...req.body };
    if (req.file) {
      updated.image = req.file.path;
    }
    Service.findByIdAndUpdate(req.params.id, updated)
    .sort('-order')
      .then(() => {
        res.status(200).json(updated);
      })
      .catch((err) => next(err));
  });

  app.delete('/api/services/:id', async (req, res, next) => {
    const service = await Service.findById(req.params.id);
    const exist = await fs.existsSync(service.image);

    exist && await fs.unlinkSync(service.image);

    await service.remove();
    res.status(200).json({});
  });

  // Service Points
  app.post('/api/services/:id/point', async (req, res, next) => {

    const service = await Service.findById(req.params.id);

    service.points.push(req.body);

    await service.save();

    Service.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.delete('/api/services/:id/point/:pointId', async (req, res, next) => {

    const service = await Service.findById(req.params.id);

    service.points.id(req.params.pointId).remove();

    await service.save();

    Service.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.put('/api/services/:id/point/:pointId', async (req, res, next) => {

    const service = await Service.findById(req.params.id);

    const point = service.points.id(req.params.pointId);

    point.title = req.body.title;
    point.order = req.body.order;
    point.description = req.body.description;

    await service.save();

    Service.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  // Service prices
  app.post('/api/services/:id/price', async (req, res, next) => {

    const service = await Service.findById(req.params.id);

    service.prices.push(req.body);

    service.save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.delete('/api/services/:id/price/:priceId', async (req, res, next) => {

    const service = await Service.findById(req.params.id);

    service.prices.id(req.params.priceId).remove();

    await service.save();

    Service.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.put('/api/services/:id/price/:pid', async (req, res, next) => {

    const service = await Service.findById(req.params.id);
    const price = service.prices.id(req.params.pid);

    price.title = req.body.title;
    price.order = req.body.order;
    price.price = req.body.price;

    service.save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.post('/api/services/:id/price/:priceId/data', async (req, res, next) => {

    const service = await Service.findById(req.params.id);
    service.prices.id(req.params.priceId).data.push(req.body);

    service.save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.put('/api/services/:id/price/:priceId/data/:dataId', async (req, res, next) => {

    const service = await Service.findById(req.params.id);
    const price = service.prices.id(req.params.priceId).data.id(req.params.dataId);

    price.price = req.body.price;
    price.order = req.body.order;
    price.description = req.body.description;

    service.save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });

  app.delete('/api/services/:id/price/:priceId/data/:dataId', async (req, res, next) => {

    const service = await Service.findById(req.params.id);
    service.prices.id(req.params.priceId).data.id(req.params.dataId).remove();

    service.save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
  });
};
