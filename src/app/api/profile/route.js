import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email } = session.user;
  const obj = await request.json();

  await connectMongoDB();

  const updatedUser = await UserModal.findOneAndUpdate(
    { email: email },
    { ...obj },
    { new: true }
  );

  if (!updatedUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user: updatedUser });
}
