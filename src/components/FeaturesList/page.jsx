import Image from "next/image";
import Link from "next/link";
import { shipping, time, visa, hour } from "@/assets";

const FeaturesList = () => {
  return (
    <div className="my-10 flex flex-col gap-8 mr-4">
      <div className="flex items-center gap-5">
        <Image src={shipping} alt="shipping-img" />
        <div className="flex flex-col gap-3">
          <h2 className="text-[#174086] text-[21px] font-semibold">
            شحن موثوق به
          </h2>
          <span className="text-[#637381] text-[16px]">
            بدون مصاريف شحن لما تشتري بـ 500 جنيه أو أكتر
          </span>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#00000017]"></div>
      <div className="flex items-center gap-5">
        <Image src={time} alt="shipping-img" />
        <div className="flex flex-col gap-3">
          <h2 className="text-[#174086] text-[21px] font-semibold">
            إرجاع سريع و مجاني
          </h2>
          <span className="text-[#637381] text-[16px]">
            ارجاع منتجاتك بكل سهولة بدون مصاريف اضافية
          </span>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#00000017]"></div>
      <div className="flex items-center gap-5">
        <Image src={visa} alt="shipping-img" />
        <div className="flex flex-col gap-3">
          <h2 className="text-[#174086] text-[21px] font-semibold">تسوق آمن</h2>
          <span className="text-[#637381] text-[16px]">
            بياناتك محمية دائماً عند الدفع داخل المنصة
          </span>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#00000017]"></div>
      <div className="flex items-center gap-5 mb-10">
        <Image src={hour} alt="shipping-img" />
        <div className="flex flex-col gap-3">
          <h2 className="text-[#174086] text-[21px] font-semibold">
            دعم فني 24
          </h2>
          <span className="text-[#637381] text-[16px]">
            يوفر الموقع دعم فني مستمر طوال اليوم
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
