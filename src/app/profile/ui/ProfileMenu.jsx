"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { settingsBar } from "@/src/constants";
import { SignOutIcon } from "@/src/components/icons";

const ProfileMenu = ({ activeTab }) => {
  return (
    <section className="flex flex-col gap-7 bg-white w-[350px] h-[430px] p-8 rounded-[12px]">
      {settingsBar.map((item) => {
        const isActive = activeTab === item.href.split("tab=")[1];
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center gap-3 transition-[0.5s] hover:mr-2 cursor-pointer ${
              isActive ? "text-[var(--main-color)]" : "text-[#35383f]"
            }`}
          >
            {Icon && <Icon color={isActive ? "#16A34A" : "#35383F"} />}
            <span className="font-semibold">{item.title}</span>
          </Link>
        );
      })}

      <div className="flex items-center gap-3 transition-[0.5s] hover:mr-2 cursor-pointer">
        <SignOutIcon />
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-[#FF4242] font-semibold"
        >
          تسجيل الخروج
        </button>
      </div>
    </section>
  );
};

export default ProfileMenu;
