import { emptyBox } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";

const EmptyBox = ({ title }) => {
  return (
    <div className="cart_content flex flex-col items-center justify-center gap-8">
      <Image
        src={emptyBox}
        width={500}
        height={387}
        quality={100}
        alt={"empty box image"}
      />
      <span className="text-[#174086] text-[23px] font-bold">
        لا يوجد أي منتج في هذه {title === "brand" ? "الماركة" : "الفئة"} حاليا !
      </span>
      <div className="buttons flex items-center gap-3">
        <Link href={"/"} className="--but w-[230px]">
          العودة للمتجر
        </Link>
        {title === "brand" ? (
          <Link
            href={"/product_category/brands"}
            className="--but bg-transparent border-[1px] border-[#9E9E9E] text-[#9E9E9E] w-[178px]"
          >
            تصفح الماركات
          </Link>
        ) : (
          <Link
            href={"/wishlist"}
            className="--but bg-transparent border-[1px] border-[#9E9E9E] text-[#9E9E9E] w-[178px]"
          >
            تصفح المفضله
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyBox;
