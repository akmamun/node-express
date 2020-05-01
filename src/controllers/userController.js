const User = require("../models/User");

async function signUp(req, res) {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
  } catch (error) {
    if (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
module.exports = { signUp };
