import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: [String], required: true },
    quantity: { type: Number, required: true },
    discount: {
      type: Schema.Types.Mixed,
    },
    images: [String],
  },
  { timestamps: true }
);

const Product = models.Product || mongoose.model("Product", ProductSchema);

export default Product;