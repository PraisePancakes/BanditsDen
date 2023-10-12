const UserModel = require("../Models/User");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { username } = req.body;

  try {
    const usernameTaken = await UserModel.findOne({ username });
    if (usernameTaken) {
      return res.status(409).send({ message: "Username is already taken" });
    }
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { username },
      { new: true }
    );
    res.status(200).send({ message: "Username changed successfully!" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
