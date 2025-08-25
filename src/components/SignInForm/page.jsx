"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import MailIcon from "../icons/MailIcon";
import { lock } from "@/src/assets";


const SignInForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();

  const signInFormHandleSubmit = async (eo) => {
    eo.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast.error("جميع الحقول مطلوبة", { position: "top-right" });
      setHasError(true);
      setIsLoading(false);
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.ok) {
        toast.success("تم تسجيل الدخول بنجاح", { position: "top-left" });
        setIsLoading(false);
        router.push("/");
        router.refresh();
      } else {
        toast.error("البريد الالكتروني أو كلمة المرور غير صحيحة.", {
          position: "top-right",
        });
        setHasError(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("ERROR:", error);
      toast.error("حدث خطأ أثناء التحقق حاول مجددا", { position: "top-right" });
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={signInFormHandleSubmit} className="mt-[40px]">
      <div className="email_input flex flex-col gap-3 w-fit">
        <label className="text-[#174086] text-[16px] font-semibold">
          البريد الالكتروني
        </label>
        <div className="relative">
          <input
            id="email"
            type="text"
            placeholder="أدخل بريدك الالكتروني"
            className={`bg-[rgb(247_247_247)] w-[450px] h-[55px] rounded-[8px] pr-[55px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!email && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            }`}
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
          />
          <MailIcon />
        </div>
      </div>
      <div className="password_input flex flex-col gap-3 w-fit mt-[20px]">
        <label className="text-[#174086] text-[16px] font-semibold">
          كلمة المرور
        </label>
        <div className="relative">
          <input
            id="password"
            placeholder="أدخل كلمة المرور الخاصة بك"
            type="password"
            className={`bg-[rgb(247_247_247)] w-[450px] h-[55px] rounded-[8px] pr-[48px] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!password && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            }`}
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
          />
          <Image
            src={lock}
            alt="lock"
            className="w-[14px] h-[16px] absolute top-[18px] right-[20px]"
          />
        </div>
      </div>

      <Link
        href="/reset_password"
        className="text-[#DE3618] text-[14px] font-semibold block text-end hover:underline mt-[10px] cursor-pointer"
      >
        هل نسيت كلمة المرور ؟
      </Link>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#26B356] h-[54px] text-white w-[450px] rounded-[10px] text-[14px] font-bold mt-[40px]"
          onClick={() => {
            setButtonClicked(true);
          }}
        >
          {isLoading ? <div className="--spr"></div> : <>تسجيل الدخول</>}
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
