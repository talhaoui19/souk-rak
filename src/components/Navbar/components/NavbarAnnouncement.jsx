"use client";

import styles from "../../../style";
import Image from "next/image";
import { close } from "../../../assets/index";
import { useState } from "react";

const NavbarAnnouncement = () => {
  const [remove, setremove] = useState(true);
  return (
    <div
      className={`nav-announcement ${remove ? "relative" : "hidden"} ${
        styles.flexCenter
      } h-[48px]`}
    >
      <div className="announcement-contnet">
        <span className="text-[var(--main-color)] font-semibold text-[14px]">
          خصم 6٪ على المدفوعات الإلكترونية (مدى - فيزا - آبل باي - StcPay -
          تحويل ) يبدأ من 199 وأكثر
        </span>
      </div>
      <div
        className="announcement-icon absolute left-[25px]"
        onClick={() => {
          setremove(false);
        }}
      >
        <figure>
          <Image src={close} alt="announcement-contnet" />
        </figure>
      </div>
    </div>
  );
};

export default NavbarAnnouncement;
