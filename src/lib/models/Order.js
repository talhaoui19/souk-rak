import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customerInfo: {
      fullName: String,
      phone: String,
      address: String,
      note: String,
      paymentMethod: String,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        title: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],
    subtotal: Number,
    discountTotal: Number,
    total: Number,
    status: {
      type: String,
    },
    cancelledAt: {
      type: Date,
      default: null,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
