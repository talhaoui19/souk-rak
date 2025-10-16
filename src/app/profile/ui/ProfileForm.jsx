"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";
import InputField from "./InputField";
import FormActions from "./FormActions";

// ICONS
import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PhtoIcon,
  UserIcon,
} from "@/src/components/icons";
const ProfileForm = ({ user }) => {
  const router = useRouter();

  // STATES
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  // HAMDLERS
  const ProfileHandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonClicked(true);

    if (name === user.name && email === user.email && phone === user.phone) {
      toast.error("لم يحدث أي تغيير في المعلومات.", { position: "top-right" });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      if (response.ok) {
        router.refresh();
        toast.success("تم تغيير معلومات الحساب بنجاح.", {
          position: "top-left",
        });
      } else {
        toast.error("فشل في تغيير معلومات الحساب.", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("حدث خطأ غير متوقع.", { position: "top-right" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch("/api/user/delete", { method: "DELETE" });

      if (response.ok) {
        await signOut({ callbackUrl: "/" });
        toast.success("تم حذف الحساب بنجاح.", { position: "top-left" });
      } else {
        toast.error("فشل في حذف الحساب.", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("حدث خطأ أثناء حذف الحساب.", { position: "top-right" });
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <form onSubmit={ProfileHandleSubmit}>
      <div className="user_image mt-4">
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <Link
              href={"update_image"}
              className="flex items-center justify-center"
            >
              <label for="imageUpload" className="inline-block"></label>
              <PhtoIcon />
            </Link>
          </div>
          <div className="avatar-preview">
            <div
              id="imagePreview"
              style={{ backgroundImage: `url("${user.image}")` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 mt-[40px] mr-[20px]">
        <div className="user-input flex flex-col gap-3 w-fit">
          <label
            htmlFor="name"
            className="text-[#174086] text-[17px] font-semibold"
          >
            اسم المستخدم
          </label>
          <InputField
            id="name"
            type="text"
            value={name}
            placeholder="أحمد ابراهيم"
            onChange={(e) => setName(e.target.value)}
            icon={UserIcon}
            error={!name && buttonClicked}
          />
        </div>
        <div className="email-input flex flex-col gap-3 w-fit">
          <label
            htmlFor="email"
            className="text-[#174086] text-[17px] font-semibold"
          >
            البريد الالكتروني
          </label>
          <InputField
            id="email"
            type="email"
            value={email}
            readOnly
            icon={MailIcon}
            note="غير قابل للتعديل"
            error={!email && buttonClicked}
          />
        </div>
      </div>
      <div className="flex items-center gap-8 mt-[40px] mr-[20px]">
        <div className="phone-input flex flex-col gap-3 w-fit">
          <label
            htmlFor="phone"
            className="text-[#174086] text-[17px] font-semibold"
          >
            رقم الهاتف
          </label>
          <InputField
            id="phone"
            type="text"
            value={phone}
            placeholder="أدخل رقم الهاتف الخاص بك"
            onChange={(e) => setPhone(e.target.value)}
            icon={PhoneIcon}
            error={!phone && buttonClicked}
          />
        </div>

        <div className="password-input flex flex-col gap-3 w-fit mt-[40px]">
          <Link href="/edit_password">
            <div className="relative">
              <input
                type="password"
                disabled={true}
                className="bg-[rgb(247_247_247)] w-[320px] h-[55px] rounded-[8px] pr-[48px]"
              />
              <span className="absolute right-[60px] top-[18px] text-base text-[var(--main-color)] font-semibold cursor-pointer">
                تغير كلمة السر
              </span>
              <EditIcon />
            </div>
          </Link>
        </div>
      </div>
      <FormActions
        isLoading={isLoading}
        isDeleting={isDeleting}
        onDelete={handleDelete}
      />
    </form>
  );
};

export default ProfileForm;
