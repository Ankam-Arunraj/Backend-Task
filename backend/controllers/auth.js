const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();
  res.send({ message: 'User created successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ message: 'Invalid email or password' });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).send({ message: 'Invalid email or password' });
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
};

exports.getUserDetails = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send({ name: user.name, email: user.email });
};