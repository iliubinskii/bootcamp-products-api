import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  id: { type: mongoose.Schema.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },

});

const CategoriesModel = mongoose.model("Categories", categoriesSchema);

export default CategoriesModel;