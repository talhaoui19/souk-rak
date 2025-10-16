import { StarsIcon } from "@/src/components/icons";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h3 className="text-[#174086] text-[28px] font-black leading-[1.8]">
        {product.name}
      </h3>
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#39CE8A] text-sm font-bold">
          <span className="text-[#000000]">تبقي فى المخزن </span>
          {product.quantity} قطعة
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-[#100D22] text-sm">(160 مراجعة)</h1>
          <StarsIcon />
        </div>
      </div>

      {/* <p className="text-[#727272] text-base leading-[2.1] mt-6">
        لابتوب أنيق يجمع بين القوة والأداء لتلبية احتياجاتك اليومية والمهنية.{" "}
        <br />
        مزود بذاكرة عشوائية 16 جيجا تمنحك سرعة وسلاسة في إنجاز المهام المتعددة.{" "}
        <br />
        سعة تخزين 1 تيرابايت لتحتفظ بجميع ملفاتك وصورك وفيديوهاتك بأمان .
      </p> */}
    </div>
  );
};

export default ProductDetails;
