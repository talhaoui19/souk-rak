import styles from "../../../style";
import Image from "next/image";
import { egybt, calling, email } from "../../../assets/index";

const NavbarTop = () => {
  return (
    <div
      className={`navbar-top ${styles.flexBetween} bg-[var(--main-color)] p-[8px] h-[48px]`}
    >
      <div className={`container ${styles.flexBetween}`}>
        <div
          className={`top-navbar-left ${styles.flex} gap-3 text-center mx-auto xl:mx-0`}
        >
          <div className={`phone ${styles.flex} gap-1 divide-x-[2px]`}>
            <figure>
              <Image src={calling} alt="calling" />
            </figure>
            <p className="text-[var(--white-color)] text-[14px] font-normal pl-[15px] cursor-pointer">
              +201091158519
            </p>
          </div>
          <div className={`email ${styles.flex} gap-1`}>
            <figure>
              <Image src={email} alt="email" />
            </figure>
            <p className="text-[var(--white-color)] text-[14px] font-normal cursor-pointer">
              UIUX@elfayomy.com
            </p>
          </div>
        </div>
        <div
          className={`top-navbar-right ${styles.flex} gap-4 text-[var(--white-color)] hidden xl:flex`}
        >
          <div className={`language ${styles.flex} gap-2`}>
            <figure>
              <Image src={egybt} alt="egybt" />
            </figure>
            <p className="title text-[13px] font-semibold border-l-2 pl-[12px] cursor-pointer">
              عربي - رس{" "}
            </p>
          </div>
          <p className="english text-[13px] font-normal border-l-2 pl-[12px] cursor-pointer">
            المفضلة
          </p>
          <a to={"/contact"}>
            <p className="contact text-[13px] font-normal border-l-2 pl-[12px] cursor-pointer">
              سياسة الاستبدال أو الارجاع
            </p>
          </a>
          <a to={"/contact"}>
            <p className="contact text-[13px] font-normal cursor-pointer">
              تواصل معنا
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
