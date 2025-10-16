import Image from "next/image";
import Link from "next/link";

const ProductImage = ({source, product, isNew }) => {
  return (
    <>
      <Link href={`/product/${product._id}?source=${source}`}>
        <Image
          src={product.images?.[0]}
          width={"150"}
          height={"150"}
          alt="prodcut1-img"
          className="my-9 hover:mt-1 transition-[0.7s]"
        />
      </Link>
      <div className="space-x-16">
        {isNew && (
          <div className="absolute top-3 left-5 bg-[#56B53F] text-white text-sm font-medium w-[58px] h-[32px] flex items-center justify-center rounded-[8px]">
            جديد
          </div>
        )}
        {product.discount && Number(product.discount) ? (
          <div className="absolute top-3 left-5 bg-[#f97316] text-white text-sm font-medium w-[50px] h-[32px] flex items-center justify-center rounded-[8px]">
            {product.discount}%
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductImage;
