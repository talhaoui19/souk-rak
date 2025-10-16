"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { close } from "../../../assets/index";
import styles from "../../../style";

const announcements = [
  "خصم 6٪ على المدفوعات الإلكترونية (مدى - فيزا - آبل باي - StcPay - تحويل ) يبدأ من 199 وأكثر",
  "شحن مجاني للطلبات أكثر من 299 ريال داخل السعودية ",
  "استرجاع مجاني خلال 14 يوم من تاريخ الاستلام ",
];

const NavbarAnnouncement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`nav-announcement relative ${styles.flexCenter} h-[48px] bg-[#f9f9f9] overflow-hidden`}
    >
      {/* محتوى الإعلان */}
      <div
        key={activeIndex}
        className="announcement-content absolute w-full text-center animate-slideDown"
      >
        <span className="text-[var(--main-color)] font-semibold text-[14px]">
          {announcements[activeIndex]}
        </span>
      </div>

      {/* زر الإغلاق */}
      <div
        className="announcement-icon absolute left-[25px] cursor-pointer"
        onClick={() => setShow(false)}
      >
        <figure>
          <Image src={close} alt="close-announcement" />
        </figure>
      </div>

      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.7s ease forwards;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NavbarAnnouncement;
