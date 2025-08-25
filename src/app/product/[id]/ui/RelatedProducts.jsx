/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { newImage, arrowDown, starProduct, heart } from "@/src/assets";
import styles from "@/src/style";
import { connectMongoDB } from "@/src/lib/db";
import Product from "@/src/lib/models/product";
import Link from "next/link";

export default async function RelatedProducts({
  productCategory,
  currentProductId,
}) {
  await connectMongoDB();
  const products = await Product.find({
    category: productCategory,
    _id: { $ne: currentProductId },
  }).lean();

  return (
    <section className="container pt-[50px] pb-[80px]">
      <div className="main-title flex items-center justify-between">
        <div>
          <h4
            className={`text-[22px] font-extrabold ${styles.flexStart} gap-1`}
          >
            المنتجات ذات الصلة
            <Image src={newImage} alt="love-img" />
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
        {products.slice(0, 4).map((product) => {
          return (
            <Link
              href={`/product/${product._id}`}
              key={product._id}
              className="product w-fit"
            >
              <div className="bg-white w-[274px] h-[271px] flex items-center justify-center px-9 py-5 rounded-lg transition-[0.5s] hover:pb-9">
                <Image
                  src={product.images?.[0]}
                  width={"150"}
                  height={"150"}
                  alt="prodcut1-img"
                  className="my-9 hover:mt-[0.2px] transition-[0.7s]"
                />
              </div>
              <span className="text-[var(--main-color)] text-xs font-bold block mt-2 ">
                {product.category[0]}
              </span>
              <h4 className="text-[#35383F] text-base font-bold my-2">
                {product.name}
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-[#1F222A] text-base font-bold">
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}{" "}
                    دج
                  </span>
                  <span className="text-[#CACACA] text-base font-bold line-through">
                    {product.price}.00 دج
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
        })}
      </div>
    </section>
  );
}
