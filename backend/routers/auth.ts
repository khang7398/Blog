import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

const router = express.Router();

//REGISTER
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasdedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hasdedPassword,
      email: req.body.email,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json('Wrong user name');
    }
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      res.status(400).json('Wrong pass word');
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default module.exports = router;
