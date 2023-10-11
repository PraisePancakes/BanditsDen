const UserModel = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;

module.exports = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await UserModel.findOne({
      username,
    });
    if (username == "") {
      return res.status(422).send({ message: "INVALID USERNAME INPUT" });
    } else if (password == "") {
      return res.status(422).send({ message: "INVALID PASSWORD INPUT" });
    } else if (!userExists) {
      return res.status(409).send({ message: "USER DOESNT EXIST!" });
    }
    const passwordMatch = bcrypt.compareSync(password, userExists.password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Invalid username or password" });
    }

    const ACCESS_TOKEN = jwt.sign(
      {
        id: userExists._id,
      },
      ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: ACCESS_TOKEN_EXPIRY,
      }
    );

    const REFRESH_TOKEN = jwt.sign(
      { id: userExists._id },
      REFRESH_TOKEN_SECRET_KEY,
      {
        expiresIn: REFRESH_TOKEN_EXPIRY,
      }
    );

    res.cookie("_AT", ACCESS_TOKEN, {
      path: "/",
      httpOnly: true,
      expiresIn: new Date(Date.now() + 60000 * 60 * 24 * 24 * 6),
      sameSite: "none",
      secure: true,
    });

    res.cookie("_RT", REFRESH_TOKEN, {
      path: "/",
      httpOnly: true,
      expiresIn: new Date(Date.now() + 60000 * 60 * 24 * 24 * 6),
      sameSite: "none",
      secure: true,
    });

    return res.status(200).send({ message: "Logged In!" });
  } catch (error) {
    return res.stats(500).send({ message: "Internal Server Error " });
  }
};
