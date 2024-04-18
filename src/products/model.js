import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  id: { type: mongoose.Schema.ObjectId },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;
