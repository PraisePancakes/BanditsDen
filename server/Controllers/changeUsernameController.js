const UserModel = require("../Models/User");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { username } = req.body;
  try {
    const usernameTaken = await UserModel.find({ username: username });
    if (usernameTaken) {
      return res.status(409).send({ message: "Username is already taken" });
    }
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
