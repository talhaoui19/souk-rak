import styles from "../../../style";
import Image from "next/image";
import { arrow, fire } from "../../../assets/index";
import { navLinks } from "../../../constants/index";

const NavbarEnd = () => {
  return (
    <div className="navbr-end bg-[var(--main-color)] ">
      <div
        className={`navbar-menu ${styles.flexCenter} h-[50px] hidden md:flex`}
      >
        {navLinks.map((item) => {
          return (
            <a
              to={item.id === "home" ? "/" : item.id}
              key={item.id}
              className={`relative ${styles.flex} hover:bg-[#1BA049] h-full px-2 gap-2`}
            >
              <div className="navbar-menu-icon">
                <Image
                  src={item.icon}
                  alt={item.icon}
                  className={`${item.icon ? "bock" : "hidden"}`}
                />
              </div>
              <p className="text-[var(--white-color)] text-[13px] font-semibold">
                {" "}
                {item.title}
              </p>
              <div className="navbar-menu-arrow">
                <Image src={arrow} alt="arrow" />
              </div>
            </a>
          );
        })}
        <a
          className={`relative ${styles.flex} hover:bg-[#1BA049] h-full px-2 gap-3 text-[var(--sec-color)] text-[15px] font-bold`}
        >
          <p
            className={`text-[var(--white-color)] text-[13px] font-semibold ${styles.flexCenter}`}
          >
            {" "}
            أفضل الخصومات
            <Image src={fire} alt="fire" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default NavbarEnd;
