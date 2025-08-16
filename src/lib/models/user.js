const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
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

const UserModal = models.User || mongoose.model("User", userSchema);

module.exports = UserModal;
