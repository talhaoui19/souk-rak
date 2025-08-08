import bcrypt from "bcrypt";
import { connectMongoDB } from "../db";
import UserModal from "../models/user";

export const credentialsAuthorize = async (credentials) => {
  await connectMongoDB();

  const user = await UserModal.findOne({ email: credentials.email });
  if (!user) return null;

  const isPasswordValid = await bcrypt.compare(
    credentials.password,
    user.password
  );
  return isPasswordValid ? user : null;
};
