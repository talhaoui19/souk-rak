const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

const productSchema = new Schema({
  name: String,
  category: String,
  description: String,
  size: String,
  price: Number,
  createdAt: Date,
});

const ProductModal = models.Product || mongoose.model("Product", productSchema);

module.exports = ProductModal;
