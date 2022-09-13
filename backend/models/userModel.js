import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
