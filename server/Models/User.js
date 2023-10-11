const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), immutable: true },
  updatedAt: { type: Date, default: Date.now() },
  main: { type: String, default: "" },
  isAdmin: { type: Boolean, default: false },
  smashWins: { type: Number, default: 0 },
  smashLosses: { type: Number, default: 0 },
  codWins: { type: Number, default: 0 },
  codLosses: { type: Number, default: 0 },
  fnWins: { type: Number, default: 0 },
  fnLosses: { type: Number, default: 0 },
});
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
