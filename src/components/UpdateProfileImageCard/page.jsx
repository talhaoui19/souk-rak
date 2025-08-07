"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { password } from "@/assets";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = ({ user }) => {
  const [image, setImage] = useState(user.image || "");
  const [isUploading, setIsUploading] = useState(false);
  const [isDelete, setIssDelete] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("يجب أن يكون حجم الصورة أقل من 5 ميجابايت", {
        position: "top-left",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      setIsUploading(true);
      try {
        const response = await fetch("../../api/profile/update_image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            image: reader.result,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          setImage(data.imageUrl);
          router.refresh();
          toast.success("تم تغيير صورة الملف الشخصي بنجاح", {
            position: "top-left",
          });
        }
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        console.error("ERROR:", error);
      } finally {
        setIsUploading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleImageDelete = async () => {
    setIssDelete(true);
    if (!image) {
      toast.error("لا توجد صورة ملف شخصي لحذفها", { position: "top-left" });
      setIssDelete(false);
      return;
    }
    try {
      const res = await fetch("../../api/profile/delete_image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

      const data = await res.json();

      if (res.ok) {
        setImage("");
        router.refresh();
        toast.success("تم حذف صورة الملف الشخصي بنجاح", {
          position: "top-left",
        });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("خطأ في حذف الصورة:", err);
      toast.error("حدث خطأ أثناء حذف الصورة", { position: "top-left" });
    }
    setIssDelete(false);
  };

  return (
    <section>
      <div className="flex items-center gap-2 text-2xl font-black text-[#174086]">
        <h2>تغيير صورة الملف الشخصي</h2>
        <Image src={password} alt="password-img" />
      </div>

      <div className="my-8">
        <div className="avatar-upload mb-10 cursor-pointer">
          <div className="avatar-preview ">
            <div
              id="imagePreview"
              style={{ backgroundImage: `url("${image}")` }}
            ></div>
          </div>
        </div>
        <input
          type="file"
          id="profile-image-upload"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
          disabled={isUploading}
        />
        <label
          htmlFor="profile-image-upload"
          className="bg-[#26B356] block w-full text-center px-[20px] py-[16px] text-[14px] font-bold text-white rounded-[10px] cursor-pointer"
        >
          {isUploading ? (
            <div className="--spr"></div>
          ) : (
            "تغيير صورة الملف الشخصي"
          )}
        </label>
        <button
          onClick={handleImageDelete}
          disabled={isDelete}
          className="bg-red-500 block w-full text-center px-[20px] py-[16px] text-[14px] font-bold text-white rounded-[10px] mt-4"
        >
          {isDelete ? <div className="--spr"></div> : "حذف الصورة الحالية"}
        </button>
      </div>
    </section>
  );
};

export default Page;
