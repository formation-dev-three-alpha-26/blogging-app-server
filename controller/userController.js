const user = require("../model/userModel");

const createAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const verify = await user.findOne({ email });

    console.log(verify, "account");

    if (verify) {
      return res.status(400).send("email est deja utilisé");
    }

    const usercrée = await user.create(req.body);

    res.status(201).send("compte crée");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {createAccount}
