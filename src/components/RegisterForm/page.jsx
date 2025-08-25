"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MailIcon from "../icons/MailIcon";
import { toast } from "react-toastify";
import { user, lock } from "@/src/assets";

const RegisterForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const RegisterFormHandleSubmit = async (eo) => {
    eo.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      toast.error("كلمة المرور و تأكيدها غير متطابقين", {
        position: "top-right",
      });
      setHasError(true);
      setIsLoading(false);
      return;
    }
    if (!name || !email || !password) {
      toast.error("جميع الحقول مطلوبة", { position: "top-right" });
      setHasError(true);
      setIsLoading(false);
      return;
    }
    if (password.length < 8) {
      toast.error("يجب أن تكون كلمة المرور أطول من 8 أحرف", {
        position: "top-right",
      });
      setHasError(true);
      setIsLoading(false);
      return;
    }
    try {
      const resUserExist = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const isUserExist = await resUserExist.json();

      if (isUserExist.user) {
        toast.error("هذا البريد الالكتروني موجود بالفعل", {
          position: "top-right",
        });
        setEmail(false);
        setHasError(true);
        setIsLoading(false);
        return;
      }

      const response = await fetch("api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        eo.target.reset();
        toast.success("تم انشاء الحساب بنجاح", { position: "top-left" });
        router.push("/signin");
      }
    } catch (error) {
      console.error("خطأ:", error);
      setHasError(true);
      toast.error("حدث خطأ أثناء التحقق حاول مجددا", { position: "top-right" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={RegisterFormHandleSubmit} action="#" className="mt-[40px]">
      <div className="user_input flex flex-col gap-3 w-fit mb-[20px]">
        <label className="text-[#174086] text-[16px] font-semibold">
          اسم المستخدم
        </label>
        <div className="relative">
          <input
            id="name"
            type="text"
            placeholder="أحمد ابراهيم"
            onChange={(eo) => {
              setName(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] w-[450px] h-[55px] rounded-[8px] pr-[55px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              !name && buttonClicked ? "border-[1px] border-[red]" : ""
            }`}
          />
          <Image
            src={user}
            alt="user-img"
            className="absolute top-[18px] right-[20px]"
          />
        </div>
      </div>
      <div className="email_input flex flex-col gap-3 w-fit mb-[20px]">
        <label className="text-[#174086] text-[16px] font-semibold">
          البريد الالكتروني
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="أدخل بريدك الالكتروني هنا"
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] w-[450px] h-[55px] rounded-[8px] pr-[55px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              !email && buttonClicked ? "border-[1px] border-[red]" : ""
            }`}
          />
          <MailIcon />
        </div>
      </div>
      <div className="password_input flex flex-col gap-3 w-fit mb-[20px]">
        <label className="text-[#174086] text-[16px] font-semibold">
          كلمة المرور
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            placeholder="أدخل كلمة المرور الخاصة بك"
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] w-[450px] h-[55px] rounded-[8px] pr-[48px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!password && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            }`}
          />
          <Image
            src={lock}
            alt="lock"
            className="w-[14px] h-[16px] absolute top-[18px] right-[20px]"
          />
        </div>
      </div>
      <div className="confirm_password_input flex flex-col gap-3 w-fit">
        <label className="text-[#174086] text-[16px] font-semibold">
          تأكيد كلمة المرور
        </label>
        <div className="relative">
          <input
            id="confirm password"
            type="password"
            placeholder="قم بادخال كلمة المرور مرة أخرى للتأكيد"
            onChange={(eo) => {
              setConfirmPassword(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] w-[450px] h-[55px] rounded-[8px] pr-[48px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!password && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            }`}
          />
          <Image
            src={lock}
            alt="lock"
            className="w-[14px] h-[16px] absolute top-[18px] right-[20px]"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#26B356] h-[54px] text-white w-[450px] rounded-[10px] text-[14px] font-bold mt-[40px]"
        onClick={() => {
          setButtonClicked(true);
        }}
      >
        {isLoading ? <div className="--spr"></div> : <>انشاء حساب</>}
      </button>
    </form>
  );
};

export default RegisterForm;
