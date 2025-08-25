import styles from "../../../style";
import Image from "next/image";
import { arrow, fire } from "../../../assets/index";
import { navLinks } from "../../../constants/index";
import Link from "next/link";

const NavbarEnd = () => {
  return (
    <div className="navbr-end bg-[var(--main-color)] ">
      <div
        className={`navbar-menu ${styles.flexCenter} h-[50px] hidden md:flex`}
      >
        {navLinks.map((item) => {
          return (
            <div
              key={item.id}
              className={`relative ${styles.flex} group hover:bg-[#1BA049] h-full`}
            >
              <Link href={item.link} className={`${styles.flex} px-2 gap-2`}>
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
              </Link>

              {item.submenu && (
                <div className="absolute top-full bg-white w-[250px] shadow-lg p-4 px-8 opacity-0 translate-y-5 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out flex">
                  <div>
                    <ul className="space-y-4">
                      {item.submenu.categories.map((cat, i) => (
                        <li
                          key={i}
                          className="text-sm font-bold text-[#727272] hover:text-[var(--main-color)] hover:mr-2 transition-[0.6s] cursor-pointer"
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
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
