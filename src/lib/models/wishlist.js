import mongoose from "mongoose";

const WishListSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Wishlist ||
  mongoose.model("Wishlist", WishListSchema);
