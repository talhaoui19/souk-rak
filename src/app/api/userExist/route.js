import { connectMongoDB } from "@/src/lib/db";
import User from "@/src/lib/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const obj = await request.json();

    await connectMongoDB();

    const user = await User.findOne({ email: obj.email }).select("-password");

    // if (!user) {
    //   return NextResponse.json(
    //     { exists: false, message: "User not found" },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json({
      exists: true,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error in /api/userExist:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
