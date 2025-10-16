import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: [String], required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    discount: {
      type: mongoose.Schema.Types.Mixed,
    },
    images: [String],
  },
  { timestamps: true }
);
if (!mongoose.models) {
  mongoose.models = {};
}

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;