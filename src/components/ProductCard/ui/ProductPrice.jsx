import { starProduct } from "@/src/assets";
import Image from "next/image";

const ProductPrice = ({ price, discount }) => {
  const finalPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <span className="text-[#1F222A] text-base font-bold">
          {price}.00 دج
        </span>
        {discount && (
          <span className="text-[#CACACA] text-base font-bold line-through">
            {finalPrice} دج
          </span>
        )}
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
  );
};

export default ProductPrice;
