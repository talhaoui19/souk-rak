"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { loginGoogle } from "@/src/assets";

const AuthButtons = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (provider) => {
    setIsLoading(true);
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <>
      <button
        disabled={isLoading}
        onClick={() => handleSignIn("google")}
        className={`flex items-center ${
          isLoading ? "justify-center" : "pr-24"
        } gap-2 w-[100%] border-[1px] border-[#EEEEEE] rounded-[8px] mt-[20px] cursor-pointer`}
      >
        {isLoading ? (
          <div className="py-3">
            <div className="--spr border-[#EEEEEE] border-r-[#919EAB]"></div>
          </div>
        ) : (
          <>
            <Image src={loginGoogle} alt="loginFacebook" />
            <p className="text-[#919EAB] text-[15px] font-semibold py-[15px]">
              تسجيل الدخول باستخدام غوغل
            </p>
          </>
        )}
      </button>
    </>
  );
};

export default AuthButtons;
