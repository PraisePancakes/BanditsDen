const UserModel = require("../Models/User");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { username } = req.body;
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { username },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
