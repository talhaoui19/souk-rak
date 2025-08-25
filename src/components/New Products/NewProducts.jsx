import Image from "next/image";
import { newImage, arrowDown, starProduct, heart } from "@/src/assets";
import { NewProductss } from "@/src/constants";
import styles from "@/src/style";

const NewProducts = () => {
  return (
    // START NEW PRODUCTS COMPONENT
    <div className="best-products pt-[100px]">
      <div className="main-title flex items-center justify-between">
        <div>
          <h4
            className={`text-[22px] font-extrabold ${styles.flexStart} gap-1`}
          >
            جديد المنتجات <Image src={newImage} alt="love-img" />
          </h4>
        </div>
        <div className="buttons flex items-center gap-3">
          <span className="text-[#787878] text-sm cursor-pointer">
            عرض المزيد
          </span>
          <Image src={arrowDown} alt="arrowDown-img" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-8">
        {NewProductss.map((item) => {
          return (
            <div key={item.id} className="product w-fit">
              <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg transition-[0.5s] hover:pb-9">
                <Image src={item.img} alt="prodcut1-img" />
              </div>
              <span className="text-[var(--main-color)] text-xs font-bold block mt-2 ">
                الإلكترونيات
              </span>
              <h4 className="text-[#35383F] text-base font-bold my-2">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-[#1F222A] text-base font-bold">
                    60.00 رس
                  </span>
                  <span className="text-[#CACACA] text-base font-bold line-through">
                    70.3 رس
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">4.1</span>
                  <Image
                    src={starProduct}
                    alt="starProduct-img"
                    className="w-[13px] h-[12px]"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <button className="--but bg-transparent w-[179px] h-[57px] text-[var(--main-color)] border-[1px] border-[var(--main-color)]">
                  أضف للسلة
                </button>
                <div className="relative h-[57px]">
                  <button className="--but bg-transparent w-[75px] h-[57px] text-[var(--main-color)] border-[1px] border-[#CDCDCD]"></button>
                  <Image
                    src={heart}
                    alt="heart-icon-img"
                    className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // END NEW PRODUCTS COMPONENT
  );
};

export default NewProducts;
