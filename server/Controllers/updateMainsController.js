const UserModel = require("../Models/User");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { main } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { main },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
