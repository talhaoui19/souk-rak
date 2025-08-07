"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";
import MailIcon from "../icons/MailIcon";
import PhooneIcon from "../icons/PhoneIcon";
import { EditIcon, PhtoIcon, UserIcon } from "../icons";

const Page = ({ user }) => {
  const router = useRouter();

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [isLoading, setIsLoading] = useState(false);
  const [deletLoading, setdeletLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const ProfileHandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonClicked(true);

    if (name === user.name && email === user.email && phone === user.phone) {
      toast.error("لم يحدث أي تغيير في المعلومات.", { position: "top-right" });
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });

    if (response.ok) {
      router.refresh();
      setIsLoading(false);
      toast.success("تم تغيير معلومات الحساب بنجاح.", { position: "top-left" });
    } else {
      console.error("Failed to update profile");
      toast.error("فشل في تغيير معلومات الحساب.", { position: "top-right" });
      setIsLoading(false);
    }
  };

  const deleteAccount = async () => {
    setdeletLoading(true);
    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
      });

      if (response.ok) {
        await signOut({ callbackUrl: "/" });
        toast.success("تم حذف الحساب بنجاح.", { position: "top-left" });
        setdeletLoading(false);
      }
    } catch (error) {
      console.error("خطأ في حذف الحساب:", error);
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
          <div className="relative">
            <input
              type="text"
              value={name}
              placeholder="أحمد ابراهيم"
              onChange={(e) => setName(e.target.value)}
              className={`bg-[rgb(247_247_247)] w-[320px] h-[55px] rounded-[8px] pr-[55px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
                !name && buttonClicked ? "border-[1px] border-[red]" : ""
              }`}
            />
            <UserIcon />
          </div>
        </div>
        <div className="email-input flex flex-col gap-3 w-fit">
          <label
            htmlFor="email"
            className="text-[#174086] text-[17px] font-semibold"
          >
            البريد الالكتروني
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              readOnly
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-[#EBEBEB] w-[320px] h-[55px] rounded-[8px] pr-[55px] ${
                !email && buttonClicked ? "border-[1px] border-[red]" : ""
              }`}
            />
            <MailIcon />
            <span className="absolute bottom-1 left-1 text-xs text-[#174086]">
              غير قابل للتعديل
            </span>
          </div>
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
          <div className="relative">
            <input
              type="text"
              value={phone}
              placeholder="أدخل رقم الهاتف الخاص بك"
              onChange={(e) => setPhone(e.target.value)}
              className={`bg-[rgb(247_247_247)] w-[320px] h-[55px] rounded-[8px] pr-[55px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
                !phone && buttonClicked ? "border-[1px] border-[red]" : ""
              }`}
            />

            <PhooneIcon />
          </div>
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
      <div className="mt-[40px] flex items-center gap-4">
        <button type="submit" className="--but">
          {isLoading ? <div className="--spr"></div> : <>حفظ التعديلات</>}
        </button>
        <button
          type="button"
          onClick={() => deleteAccount()}
          className="--but bg-[#FF4242]"
        >
          {deletLoading ? <div className="--spr"></div> : <>حذف الحساب</>}
        </button>
      </div>
    </form>
  );
};

export default Page;
