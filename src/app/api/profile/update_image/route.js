import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectMongoDB();

    const { email, image } = await request.json();

    if (!email || !image) {
      return NextResponse.json(
        { message: 'البريد الإلكتروني والصورة مطلوبان' },
        { status: 400 }
      );
    }

    const uploadResult = await cloudinary.uploader.upload(image, {
      folder: 'profile_images',
      overwrite: true,
      unique_filename: true
    });

    const updatedUser = await UserModal.findOneAndUpdate(
      { email },
      { image: uploadResult.secure_url },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: 'المستخدم غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'تم تحديث الصورة بنجاح',
        user: updatedUser,
        imageUrl: uploadResult.secure_url
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('خطأ في تحديث الصورة:', error);
    return NextResponse.json(
      { message: 'حدث خطأ أثناء تحديث الصورة' },
      { status: 500 }
    );
  }
}