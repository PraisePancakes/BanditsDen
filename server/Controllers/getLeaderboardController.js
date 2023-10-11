const UserModel = require("../Models/User");

module.exports = async (req, res) => {
  try {
    const getUsers = await UserModel.find();
    res.send(getUsers);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
