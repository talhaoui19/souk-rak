"use client";
import styles from "../../../style";
import Image from "next/image";
import { arrow, fire } from "../../../assets/index";
import { brandsLinks, navLinks } from "../../../constants/index";
import Link from "next/link";
import { useState } from "react";

const NavbarEnd = () => {
  const [showBrandsMenu, setShowBrandsMenu] = useState(false);

  return (
    <div className="navbr-end bg-[var(--main-color)]">
      <div
        className={`navbar-menu relative ${styles.flexCenter} h-[50px] hidden md:flex`}
      >
        {navLinks.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-center h-full gap-1 hover:bg-[#1BA049]"
            onMouseEnter={() => index === 0 && setShowBrandsMenu(true)}
            onMouseLeave={() => index === 0 && setShowBrandsMenu(false)}
          >
            <Link href={item.link} className={`${styles.flex} px-2 gap-2`}>
              {item.icon && (
                <Image src={item.icon} alt={item.title} className="w-4 h-4" />
              )}
              <p className="text-[var(--white-color)] text-[13px] font-semibold">
                {item.title}
              </p>
              <Image src={arrow} alt="arrow" className="w-3 h-3" />
            </Link>
          </div>
        ))}

        <div
          className={`absolute top-full bg-white w-[1060px] shadow-lg p-4 px-8
            flex justify-between z-10 grid-cols-3 gap-2
            transition-all duration-300 ease-out
            ${
              showBrandsMenu
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 translate-y-5 invisible"
            }`}
          onMouseEnter={() => setShowBrandsMenu(true)}
          onMouseLeave={() => setShowBrandsMenu(false)}
        >
          <div className="space-y-2 mt-4">
            <p className="text-base font-semibold">الفئات</p>
            {navLinks.map((item, index) => (
              <div key={item.id}>
                <Link href={item.link}>
                  <p className="text-[#727272] text-sm">{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {brandsLinks.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-[182px]"
                />
              </div>
            ))}
          </div>
        </div>

        <a
          className={`relative ${styles.flex} hover:bg-[#1BA049] h-full px-2 gap-3 text-[15px] font-bold`}
        >
          <p
            className={`text-[var(--white-color)] text-[13px] font-semibold ${styles.flexCenter}`}
          >
            أفضل الخصومات
            <Image src={fire} alt="fire" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default NavbarEnd;
