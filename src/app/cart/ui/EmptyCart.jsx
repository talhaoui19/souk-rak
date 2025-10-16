import { EmptyCartIcon } from "@/src/components/icons";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="cart_content flex flex-col items-center justify-center gap-8 my-[100px]">
      <EmptyCartIcon />
      <span className="text-[#174086] text-[23px] font-bold">
        سلة التسوق فارغة !
      </span>
      <div className="buttons flex items-center gap-3">
        <Link href={"/"} className="--but w-[230px]">
          العودة للمتجر
        </Link>
        <Link
          href={"/wishlist"}
          className="--but bg-transparent border-[1px] border-[#9E9E9E] text-[#9E9E9E] w-[178px]"
        >
          تصفح المفضله
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
