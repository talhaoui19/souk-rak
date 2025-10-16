import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
    address: String,
    shippingAddress: {
      shippingUserName: String,
      shippingCountry: String,
      shippingPhone: String,
      shippingAddress: String,
    },
    image: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
