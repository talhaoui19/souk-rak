import Image from "next/image";
import Link from "next/link";

const LaptopCard = ({ product }) => {
  return (
    <div className="relative bg-white rounded-[8px] px-9 py-4">
      <Image
        src={product.images[0]}
        alt={`${product.title}-img`}
        width={"150"}
        height={"150"}
        className="mx-auto"
      />
      <h4 className="text-[#35383F] font-semibold text-center text-sm">
        {product.title}
      </h4>
      <p className="text-[#9E9E9E] text-sm text-center leading-9">
        شاشة عرض HUAWEI FullView مريحة للعين
      </p>
      <span className="text-[#1F222A] text-base font-bold block text-center mt-3">
        يبدأ من {product.price} دج
      </span>
      <Link
        href={`/product/${product._id}`}
        className="text-[var(--main-color)] text-sm font-bold block text-center my-4 hover:underline cursor-pointer"
      >
        تعرف على المزيد
      </Link>
    </div>
  );
};

export default LaptopCard;
