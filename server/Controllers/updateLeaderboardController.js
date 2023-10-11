const UserModel = require("../Models/User");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { smashWins, smashLosses, codWins, codLosses, fnWins, fnLosses } =
    req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { smashWins, smashLosses, codWins, codLosses, fnWins, fnLosses },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
