import { arrowDown, loveImg } from "@/src/assets";
import styles from "@/src/style";
import Image from "next/image";

const Header = () => {
  return (
    <div className="main-title flex items-center justify-between">
      <div>
        <h4 className={`text-[22px] font-extrabold ${styles.flexStart} gap-1`}>
          وصل حديثا <Image src={loveImg} alt="Section Logo Image" />
        </h4>
      </div>
      <div className="buttons flex items-center gap-3">
        <span className="text-[#787878] text-sm cursor-pointer">
          عرض المزيد
        </span>
        <Image src={arrowDown} alt="Arrow Down Image" />
      </div>
    </div>
  );
};

export default Header;
