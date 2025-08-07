import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { token, newPassword } = await req.json();

        const resetTokenHash = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        const user = await UserModal.findOne({
            resetPasswordToken: resetTokenHash,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return NextResponse.json({ error: "The reset link is invalid or expired" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        return NextResponse.json({
            message: "تم تغيير كلمة المرور بنجاح"
        }, { status: 200 });

    } catch (error) {
        console.error("Error confirming password reset:", error);
        return NextResponse.json({ error: "An error occurred while processing the request." }, { status: 500 });
    }
}