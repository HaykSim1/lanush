const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const auth = require('../../middleware/auth');

module.exports = (app) => {

  app.post('/api/users', async (req, res, next) => {
    // Create a new user
    try {
      const user = new User({ ...req.body, role: 2 });
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).send('error')
    }
  });

  app.post('/api/user/login', async (req, res, next) => {
    //Login a registered user

    try {
      const { email, password } = req.body;

      const user = await User.findByCredentials(email, password);
      if(!user.role) {
        user.role = 1;
        await user.save();
      }
      if (!user) {
        return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
      }
      const token = await user.generateAuthToken();
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(400).json(error)
    }
  });

  app.get('/api/user/check', async (req, res, next) => {
    if (!req.header('Authorization')) {
      return res.status(401).json({ error: 'Not authorized to access this resource' });
    }

    const token = req.header('Authorization').replace('Bearer:', '');

    const data = await jwt.verify(token, process.env.JWT_KEY);

    if (data._id) {
      res.status(200).json(data);
    } else {
      res.status(401).json({ error: 'Login failed! Check authentication credentials' });
    }
  });

  app.get('/api/user/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
      req.user.tokens.splice(0, req.user.tokens.length);

      await req.user.save();
      res.status(200).json({});

    } catch (error) {
      res.status(500).send(error)
    }
  });

  app.get('/api/users', auth, async (req, res) => {
    // Log user out of the application
    try {

      const users = await User.find({ role: 2 })

      res.status(200).json(users);

    } catch (error) {
      res.status(500).send(error)
    }
  });

  app.put('/api/users/:id', auth, (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => next(err));
  });

  app.delete('/api/users/:id', auth, (req, res, next) => {
    User.findByIdAndRemove(req.params.id, req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => next(err));
  });

  app.get('/api/user/logout-all', auth, async (req, res) => {
    // Log user out of the application
    try {
      req.user.tokens.splice(0, req.user.tokens.length);
      await req.user.save();
      res.send();

    } catch (error) {
      res.status(500).send(error)
    }
  });
};
