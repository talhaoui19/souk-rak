"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LockIcon } from "../icons";

const Page = () => {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const EditPasswordHandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonClicked(true);
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error(" جميع الحقول مطلوبة . ", {
        position: "top-right",
      });
      setHasError(true);
      setIsLoading(false);
    }
    if (newPassword || confirmPassword) {
      if (newPassword !== confirmPassword) {
        toast.error("كلمة السر الجديدة وتأكيدها غير متطابقين", {
          position: "top-right",
        });
        setIsLoading(false);
        return;
      }
    }
    if (currentPassword || newPassword) {
      if (currentPassword === newPassword) {
        toast.error("كلمة السر الحالية و الجديدة متطابقة", {
          position: "top-right",
        });
        setIsLoading(false);
        return;
      }
    }
    try {
      const response = await fetch("../../api/user/change_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("تم تغيير كلمة السر بنجاح.", { position: "top-left" });
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        router.push("/");
      } else {
        if (currentPassword && data.error === "password Not Correcet") {
          toast.error("كلمة السر الحالية غير صحيحة .", {
            position: "top-right",
          });
          setIsLoading(false);
          return;
        }
      }
    } finally {
      setIsLoading(false);
      setButtonClicked(false);
    }
  };
  return (
    <form onSubmit={EditPasswordHandleSubmit}>
      <div className="password-input  flex flex-col gap-3 mt-[20px]">
        <label htmlFor="" className="text-[#174086] text-[17px] font-semibold">
          كلمة المرور الحالية
        </label>
        <div className="relative">
          <input
            type="password"
            id="currentPassword"
            placeholder="أدخل كلمة المرور الحالية هنا"
            value={currentPassword}
            onChange={(eo) => {
              setCurrentPassword(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!currentPassword && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            } w-[100%] h-[55px] rounded-[8px] pr-[48px]`}
          />
          <LockIcon />
        </div>
      </div>
      <div className="password-input  flex flex-col gap-3 mt-[20px]">
        <label htmlFor="" className="text-[#174086] text-[17px] font-semibold">
          كلمة المرور الجديدة
        </label>
        <div className="relative">
          <input
            type="password"
            id="newPassword"
            placeholder="أدخل كلمةا لمرور الجديدة الخاصة بك"
            value={newPassword}
            onChange={(eo) => {
              setNewPassword(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!newPassword && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            } w-[100%] h-[55px] rounded-[8px] pr-[48px]`}
          />
          <LockIcon />
        </div>
      </div>
      <div className="password-input  flex flex-col gap-3 mt-[20px]">
        <label className="text-[#174086] text-[17px] font-semibold">
          تأكيد كلمة المرور الجديدة
        </label>
        <div className="relative">
          <input
            type="password"
            id="confirmPassword"
            placeholder="تأكيد كلمة المرور الجديدة الخاصة بك"
            value={confirmPassword}
            onChange={(eo) => {
              setConfirmPassword(eo.target.value);
            }}
            className={`bg-[rgb(247_247_247)] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!confirmPassword && buttonClicked) || hasError
                ? "border-[1px] border-[red]"
                : ""
            } w-[100%] h-[55px] rounded-[8px] pr-[48px]`}
          />
          <LockIcon />
        </div>
      </div>
      <div className="mt-[15px]">
        <button type="submit" className="--but w-full mt-2">
          {isLoading ? <div className="--spr"></div> : <>تأكيد</>}
        </button>
      </div>
    </form>
  );
};

export default Page;
