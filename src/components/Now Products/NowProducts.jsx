import styles from "../../style";
import {
  loveImg,
  arrowDown,
  product9,
  product10,
  product11,
  product12,
  starProduct,
  heart,
  matebook,
  matebook2,
  matebook3,
  matebook4,
  matebook5,
} from "../../assets/index";
import Image from "next/image";

const NewProducts = () => {
  return (
    // START NEW PRODUCTS COMPONENT
    <div className="best-products pt-[100px]">
      <div className="main-title flex items-center justify-between">
        <div>
          <h4
            className={`text-[22px] font-extrabold ${styles.flexStart} gap-1`}
          >
            وصل حديثا <Image src={loveImg} alt="love-img" />
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
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg transition-[0.5s] hover:pb-9">
            <Image src={product9} alt="prodcut1-img" />
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
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg transition-[0.5s] hover:pb-9">
            <Image src={product10} alt="prodcut1-img" />
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
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg transition-[0.5s] hover:pb-9">
            <Image src={product11} alt="prodcut1-img" />
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
        <div className="product w-fit">
          <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg transition-[0.5s] hover:pb-9">
            <Image src={product12} alt="prodcut1-img" />
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
      </div>
      <div className="flex gap-5 mt-[100px]">
        <div className="bg-white relative w-[386px] h-[785px] px-9 py-11 rounded-[8px]">
          <h4 className="text-[#35383F] text-3xl font-semibold text-center leading-10">
            HUAWEI MateBook X Pro
          </h4>
          <p className="text-[#9E9E9E] text-sm text-center leading-6">
            <br /> جسم معدني بملمس ناعم شاشة عرض HUAWEI FullView بالألوان
            الحقيقية
            <br />
            الجهاز الفائق
            <br />
          </p>
          <span className="text-[#1F222A] text-base font-bold block text-center mt-5">
            يبدأ من 6,999.00 ر.س
          </span>
          <span className="text-[var(--main-color)] text-sm font-bold block text-center mt-4 cursor-pointer">
            تعرف على المزيد
          </span>
          <Image
            src={matebook}
            alt="matebook-img"
            className="absolute bottom-0 left-0 right-0"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white px-9 py-2 pb-6 rounded-[8px]">
            <Image src={matebook2} alt="matebook2-img" className="mx-auto" />
            <h4 className="text-[#35383F] text-sm font-semibold text-center">
              HUAWEI MateBook D 14
            </h4>
            <p className="text-[#9E9E9E] text-sm text-center leading-9">
              شاشة عرض HUAWEI FullView مريحة للعين
            </p>
            <span className="text-[#1F222A] text-base font-bold block text-center mt-3">
              يبدأ من 3,499.00 ر.س
            </span>
            <span className="text-[var(--main-color)] text-sm font-bold block text-center mt-4 cursor-pointer">
              تعرف على المزيد
            </span>
          </div>
          <div className="bg-white px-9 py-2 pb-6 rounded-[8px]">
            <Image src={matebook3} alt="matebook2-img" className="mx-auto" />
            <h4 className="text-[#35383F] text-sm font-semibold text-center">
              HUAWEI MateBook E
            </h4>
            <p className="text-[#9E9E9E] text-sm text-center leading-9">
              شاشة عرض HUAWEI FullView مريحة للعين
            </p>
            <span className="text-[#1F222A] text-base font-bold block text-center mt-3">
              يبدأ من 2,599.00 ر.س
            </span>
            <span className="text-[var(--main-color)] text-sm font-bold block text-center mt-4 cursor-pointer">
              تعرف على المزيد
            </span>
          </div>
          <div className="bg-white px-9 py-2 pb-6 rounded-[8px]">
            <Image src={matebook4} alt="matebook2-img" className="mx-auto" />
            <h4 className="text-[#35383F] text-sm font-semibold text-center">
              HUAWEI MateBook 16s
            </h4>
            <p className="text-[#9E9E9E] text-sm text-center leading-9">
              شاشة عرض HUAWEI FullView مريحة للعين
            </p>
            <span className="text-[#1F222A] text-base font-bold block text-center mt-3">
              يبدأ من 1,899.00 ر.س
            </span>
            <span className="text-[var(--main-color)] text-sm font-bold block text-center mt-4 cursor-pointer">
              تعرف على المزيد
            </span>
          </div>
          <div className="bg-white px-9 py-2 pb-6 rounded-[8px]">
            <Image src={matebook5} alt="matebook2-img" className="mx-auto" />
            <h4 className="text-[#35383F] text-sm font-semibold text-center">
              HUAWEI MateBook D 16{" "}
            </h4>
            <p className="text-[#9E9E9E] text-sm text-center leading-9">
              شاشة عرض HUAWEI FullView مريحة للعين
            </p>
            <span className="text-[#1F222A] text-base font-bold block text-center mt-3">
              يبدأ من 1,899.00 ر.س
            </span>
            <span className="text-[var(--main-color)] text-sm font-bold block text-center mt-4 cursor-pointer">
              تعرف على المزيد
            </span>
          </div>
        </div>
      </div>
    </div>
    // END NEW PRODUCTS COMPONENT
  );
};

export default NewProducts;
