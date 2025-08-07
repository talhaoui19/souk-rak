"use client";

import Image from "next/image";
import { login } from "../../../assets/index";
import { settingsBar } from "../../../constants/index";
import { signOut } from "next-auth/react";

const SettingsDropDown = () => {
  return (
    // STRAT SETTINGS BAR COMPONENT
    <div className="flex flex-col gap-7 shadow-[0px_7px_85px_0px_#1C4FA512] border-[1px] border-[#F6F6F6] w-[450px] h-[430px] p-8 rounded-[8px]">
      {settingsBar.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-center gap-3 transition-[0.5s] hover:mr-2 cursor-pointer"
          >
            <Image src={item.img} alt={item.id} />
            <span className="text-[#35383F] font-semibold">{item.title}</span>
          </div>
        );
      })}
      <div className="flex items-center gap-3 transition-[0.5s] hover:mr-2 cursor-pointer">
        <Image src={login} alt="login-img" />
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-[#FF4242] font-semibold"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
    // END SETTINGS BAR COMPONENT
  );
};

export default SettingsDropDown;
