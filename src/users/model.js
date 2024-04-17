import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: mongoose.Schema.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  products: { type: [String] },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
