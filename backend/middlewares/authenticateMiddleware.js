import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const validate = async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      // get the token from the header
      token = authHeader.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from the token
      req.user = await UserModel.findById(decoded.id);
      next();
    } catch (error) {
      res.status(401).json({ message: "invalid token" });
    }
  }
  if (!token) {
    res.json({ message: "no token" });
  }
};
