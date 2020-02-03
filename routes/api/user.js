const User = require('../../models/User');

const auth = require('../../middleware/auth');

module.exports = (app) => {

  app.post('/api/user', async (req, res, next) => {
    // Create a new user
    try {
      const user = new User(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).send(error)
    }
  });

  app.post('/api/user/login', async (req, res, next) => {
    //Login a registered user
    //const { email, password } = req.body;
  //  const user = new User({email, password, name: 'Hayk'});
//	  await user.save();
//	  const token = await user.generateAuthToken();
    //
    //return res.status(200).json(user);
    try {
      const { email, password } = req.body;

      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res.status(401).json({ error: 'Login failed! Check authentication credentials' })
      }
      const token = await user.generateAuthToken();
      res.status(200).json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(400).json(error)
    }
  });

  app.get('/api/user/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
      req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);

      await req.user.save();
      res.status(200).json({});

    } catch (error) {
      res.status(500).send(error)
    }
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
