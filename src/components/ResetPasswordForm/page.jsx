"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import { LockIcon } from "../icons";

const Page = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const router = useRouter();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    if (!newPassword || !confirmPassword) {
      toast.error("جميع الحقول مطلوبة", { position: "top-right" });
      setisLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("كلمتا المرور غير متطابقتين", {
        position: "top-right",
      });
      setisLoading(false);
      return;
    }

    try {
      const response = await fetch("../../../api/auth/reset_password_confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, { position: "top-left" });
        setisLoading(false);
        router.push("/signin");
      } else {
        toast.error(data.error, {
          position: "top-right",
        });
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("حدث خطأ أثناء تغيير كلمة المرور , حاول مجددا", {
        position: "top-right",
      });
    } finally {
      setisLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="password-input  flex flex-col gap-3 mt-[20px]">
        <label htmlFor="" className="text-[#174086] text-[17px] font-semibold">
          كلمة المرور الجديدة
        </label>
        <div className="relative">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="كلمة المرور الجديدة"
            className={`bg-[rgb(247_247_247)] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!newPassword && buttonClicked) ||
              (newPassword !== confirmPassword && buttonClicked)
                ? "border-[1px] border-[red]"
                : ""
            } w-[100%] h-[55px] rounded-[8px] pr-[48px]`}
          />
          <LockIcon />
        </div>
      </div>
      <div className="password-input  flex flex-col gap-3 mt-[20px]">
        <label htmlFor="" className="text-[#174086] text-[17px] font-semibold">
          تأكيد كلمة المرور
        </label>
        <div className="relative">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="تأكيد كلمة المرور الجديدة"
            className={`bg-[rgb(247_247_247)] focus:border-none focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] ${
              (!confirmPassword && buttonClicked) ||
              (newPassword !== confirmPassword && buttonClicked)
                ? "border-[1px] border-[red]"
                : ""
            } w-[100%] h-[55px] rounded-[8px] pr-[48px]`}
          />
          <LockIcon />
        </div>
      </div>

      <div className="mt-[15px]">
        <button
          type="submit"
          className="--but w-full mt-2"
          onClick={() => {
            setButtonClicked(true);
          }}
        >
          {isLoading ? <div className="--spr"></div> : <>تأكيد</>}
        </button>
      </div>
    </form>
  );
};

export default Page;
