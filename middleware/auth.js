const jwt = require('jsonwebtoken');

const User = require('../models/User');

module.exports = async(req, res, next) => {
  if (!req.header('Authorization')) {
    return res.status(401).json({ error: 'Not authorized to access this resource' });
  }

  const token = req.header('Authorization').replace('Bearer:', '');

  const data = await jwt.verify(token, process.env.JWT_KEY);
  try {
    const user = await User.findOne({ _id: data._id, 'tokens.token': token });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next()
  } catch (error) {
    res.status(401).json({ error: 'Not authorized to access this resource' });
  }
};
