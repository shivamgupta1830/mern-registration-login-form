import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "User already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.json({ status: true, msg: "Registered Successfully !" });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!email) {
      return res.json({ msg: "User does not exists!" });
    }
    const comparePassword = bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.json({ msg: "Invalid Password!" });
    }
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 360000,
    });

    return res.json({ status: true, msg: "Successfully Logged in!" });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
};

export { login, signup, logout };
