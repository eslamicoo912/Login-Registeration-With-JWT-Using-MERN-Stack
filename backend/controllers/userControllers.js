import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) return res.status(401).json({ message: "user already exists" });
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        const newUser = new UserModel({ username: username, password: hash });
        newUser.save();
        res.json({
          data: newUser,
          token: generateToken(newUser._id),
        });
      })
      .catch((error) => {
        res.status(401).json({ status: res.statusCode });
      });
  } catch (error) {
    res.status(401).json({ status: res.statusCode });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMe = async (req, res) => {
  try {
    const data = await UserModel.findById(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (!user) res.status(401).json({ message: "username not found" });
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) return res.status(401).json({ message: "password is wrong" });
      return res.status(200).json({
        message: `${username} logged in`,
        token: generateToken(user._id),
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
