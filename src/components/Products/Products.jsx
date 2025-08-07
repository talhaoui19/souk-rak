import styles from "../../style";
import {
  fireImg,
  arrowDown,
  prodcut1,
  prodcut2,
  prodcut3,
  prodcut4,
  prodcut5,
  prodcut6,
  prodcut7,
  prodcut8,
  starProduct,
  heart,
} from "../../assets/index";
// import Button from "../Button";
import Image from "next/image";
const Products = () => {
  return (
    // START BEST PRODUCTS COMPONENT
    <div className="best-products pb-[150px]">
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
          <Image src={arrowDown} alt="arrowDown-img" className="" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-8">
        <div className="product w-fit">
          <div className="bg-white relative w-[274px] h-[271px] flex items-center justify-center rounded-lg">
            <Image src={prodcut1} alt="prodcut1-img" className="my-9" />
            <div className="absolute top-3 left-5 bg-[#56B53F] text-white text-sm font-bold w-[61px] h-[36px] flex items-center justify-center rounded-[8px]">
              جديد
            </div>
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white relative w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg">
            <Image
              src={prodcut2}
              alt="prodcut2-img"
              className="transition-[0.5s] hover:pb-8"
            />
            <div className="absolute top-3 left-5 bg-[#FF2E00] text-white text-sm font-bold w-[61px] h-[36px] flex items-center justify-center rounded-[8px]">
              25%
            </div>
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg">
            <Image
              src={prodcut3}
              alt="prodcut1-img"
              className="transition-[0.5s] hover:pb-8"
            />
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg">
            <Image
              src={prodcut4}
              alt="prodcut1-img"
              className="transition-[0.5s] hover:pb-8"
            />
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg">
            <Image
              src={prodcut5}
              alt="prodcut1-img"
              className="transition-[0.5s] hover:pb-8"
            />
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg">
            <Image
              src={prodcut6}
              alt="prodcut1-img"
              className="transition-[0.5s] hover:pb-8"
            />
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg">
            <Image
              src={prodcut7}
              alt="prodcut1-img"
              className="transition-[0.5s] hover:pb-8"
            />
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] px-9 py-5 rounded-lg">
            <Image
              src={prodcut8}
              alt="prodcut1-img"
              className="transition-[0.5s] hover:pb-8"
            />
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
            {/* <Button
              title="أضاف للسلة"
              text="text-[var(--main-color)] text-[16px] border-[1px] border-[var(--main-color)] rounded-[8px]"
              width="w-[179px] h-[57px]"
            /> */}
            <div className="relative h-[57px]">
              {/* <Button
                title=""
                text="text-[var(--main-color)] text-[16px] border-[1px] border-[#CDCDCD] rounded-[8px]"
                width="w-[75px] h-[57px]"
              /> */}
              <Image
                src={heart}
                alt="heart-icon-img"
                className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // END BEST PRODUCTS COMPONENT
  );
};

export default Products;
