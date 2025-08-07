import styles from "../../style";
import "./AllPhones.css";

const AllPhones = () => {
  return (
    // START ALL PHONES COMPONENT
    <div className="all-phones">
      <div
        className={`all-phones-content ${styles.flexColumn} items-center justify-center gap-6`}
      >
        <h2 className="text-[var(--white-color)] text-[55px] font-black w-[696px] text-center leading-[93px]">
          هواتف ذكية عالية المستوى بتصميم متميز ومبتكر
        </h2>
        <p className="text-[#CBCBCB] text-[16px] font-bold leading-[28px]">
          تصميم أنيق، تصوير ثوري في الهاتف الجديد لدينا HUAWEI Mate X3
        </p>
        <div className="mt-[12px]">
        <button className="--but bg-white text-[var(--main-color)] w-[219px]">عرض كل الهواتف الذكية</button>
        </div>
      </div>
    </div>
    // END ALL PHONES COMPONENT
  );
};

export default AllPhones;
