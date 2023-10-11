const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { password } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ error: "Invalid password" });
    }

    await UserModel.findByIdAndDelete(userId);

    return res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};
