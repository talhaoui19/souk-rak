"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import MailIcon from "../icons/MailIcon";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const ResetPasswordHandleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    if (!email) {
      toast.error("حقل البريد الالكتروني مطلوب", { position: "top-right" });
      setisLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/reset_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, { position: "top-left" });
        setisLoading(false);
      } else {
        toast.error(data.error, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("حدث خطأ أثناء محاولة ارسال الرابط", {
        position: "top-right",
      });
    } finally {
      setisLoading(false);
    }
  };
  return (
    <form onSubmit={ResetPasswordHandleSubmit} className="relative">
      <div className="phone-input flex flex-col gap-3 mt-[20px]">
        <label className="text-[#174086] text-[16px] font-semibold">
          البريد الالكتروني
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`bg-[rgb(247_247_247)] ${
              !email && buttonClicked ? "border-[1px] border-[red]" : ""
            } w-[100%] h-[55px] rounded-[8px] pr-[55px]`}
            placeholder="أكتب بريدك الالكتروني هنا"
          />
          <MailIcon />
        </div>
      </div>

      <div className="mt-[15px]">
        <button
          type="submit"
          className="--but w-full"
          onClick={() => {
            setButtonClicked(true);
          }}
        >
          {isLoading ? <div className="--spr"></div> : "إرسال"}
        </button>
      </div>
    </form>
  );
};

export default Page;
