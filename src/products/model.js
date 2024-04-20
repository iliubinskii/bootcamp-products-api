import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  id: { type: mongoose.Schema.ObjectId },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],
  // validation for "allow not more than 2 categories"
  category: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'category',
    validate: {
      validator: (v) => v.length <= 2,
      message: 'Product cannot have more than 2 categories.',
    },
  },
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;
