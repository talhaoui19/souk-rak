import { arrowDown, fireImg } from "@/src/assets";
import styles from "@/src/style";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className="main-title flex items-center justify-between">
      <div>
        <h4 className={`text-[22px] font-extrabold ${styles.flexStart}`}>
          أفضل المنتجات <Image src={fireImg} alt="love-img" />
        </h4>
      </div>
      <div className="buttons flex items-center gap-3">
        <span className="text-[#787878] text-sm cursor-pointer">
          عرض المزيد
        </span>
        <Image src={arrowDown} alt="arrowDown-img" />
      </div>
    </div>
  );
};

export default HeaderSection;
