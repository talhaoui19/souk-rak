
import { heart, starProduct } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product._id}`}
      key={product._id}
      className="product w-fit"
    >
      <div className="bg-white relative w-[274px] h-[271px] flex items-center justify-center rounded-lg">
        <Image
          src={product.images?.[0]}
          width={"150"}
          height={"150"}
          alt="prodcut1-img"
          className="my-9 hover:mt-1 transition-[0.7s]"
        />
        <div className="absolute top-3 left-5 bg-[#56B53F] text-white text-sm font-bold w-[61px] h-[36px] flex items-center justify-center rounded-[8px]">
          جديد
        </div>
      </div>
      <span className="text-[var(--main-color)] text-xs font-bold block mt-2 ">
        {/* {product.category[0]} */}
      </span>
      <h4 className="text-[#35383F] text-base font-bold my-2">
        {product.name}
      </h4>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <span className="text-[#1F222A] text-base font-bold">
            {product.price}.00 دج
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
    </Link>
  );
}
