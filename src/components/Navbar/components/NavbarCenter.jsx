// "use client";

import styles from "../../../style";
import Image from "next/image";
import { logo, search, profile, store, notif } from "../../../assets/index";
import Link from "next/link";

const NavbarCenter = ({ session }) => {
  return (
    <div className="navbar-center h-[90px]">
      <div className={`container ${styles.flexBetween} py-[15px] mt-[10px]`}>
        <div className={`${styles.flexCenter} gap-8`}>
          <div className="navbar-brand">
            <Link href="/">
              <figure>
                <Image src={logo} alt="logo" />
              </figure>
            </Link>
          </div>
          <div className="navba-input relative">
            <Image
              src={search}
              alt="search"
              className="absolute top-[50%] translate-y-[-50%] right-[13px]"
            />
            <input
              type="text"
              placeholder="بحث عن المنتجات"
              className="bg-[#f5f5f5] w-[400px] h-[50px] rounded-[8px] text-[14px] pr-[45px]"
            />
          </div>
        </div>
        <div className={`navbar-user ${styles.flexBetween} gap-4`}>
          <div className={`navbar-user-signin ${styles.flexCenter} gap-3`}>
            {session?.user?.image ? (
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={session.user.image}
                  width={50}
                  height={50}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className={`navbar-user-img bg-[#F4F6F8] ${styles.flexCenter} w-[48px] h-[48px] rounded-full`}
              >
                <Image src={profile} alt="profile" />
              </div>
            )}

            <div className={`navbar-user-contnet ${styles.flexColumn} gap-1`}>
              <span className="text-[#9E9E9E] text-[14px]">
                {session ? `مرحبا بك` : "مرحبا بكم"}
              </span>
              {session ? (
                <Link href="/profile">
                  <h4 className="text-[15px] font-bold hover:underline">
                    {session.user?.name}
                  </h4>
                </Link>
              ) : (
                <Link href="/signin">
                  <h4 className="text-[15px] font-bold hover:underline">
                    تسجيل الدخول
                  </h4>
                </Link>
              )}
            </div>
          </div>
          <div className={`navbar-user-palance ${styles.flexCenter} gap-3`}>
            <div
              className={`navbar-user-img relative bg-[#F4F6F8] ${styles.flexCenter} w-[48px] h-[48px] rounded-full`}
            >
              <Image
                src={notif}
                alt="notif"
                className="absolute top-[-2px] right-[-2px]"
              />
              <Image src={store} alt="store" />
            </div>
            <div className={`navbar-user-contnet ${styles.flexColumn} gap-1`}>
              <span className="text-[#9E9E9E] text-[14px]"> تسجيل الدخول</span>
              <h4 className="text-[15px] font-bold"> 2.200 رس</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCenter;
