const { User } = require('../model/User');

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const response = await user.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    let qry = await User.findOne({ email: req.body.email }).exec();
    console.log(qry, 'qury');
    if (qry) {
      if (qry.password === req.body.password) {
        res.status(200).json(qry);
      } else {
        res.status(401).json({ message: 'no password match' });
      }
    } else {
      res.status(401).json({ message: 'no email found' });
    }
  } catch (error) {
    res.status(401).json({ message: 'catch err' });
  }
};
