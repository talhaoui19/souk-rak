import { emptyWishList } from "@/src/assets";
import Image from "next/image";

const EmptyWishList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 my-[100px]">
      <Image
        src={emptyWishList}
        width={500}
        height={333}
        quality={100}
        alt="emptyWishList"
      />
      <span className="text-[#174086] text-[23px] font-bold">
        قائمتك المفضلة فارغة !
      </span>
      <div className="buttons flex items-center gap-3">
        <button className="--but w-[230px]">العودة للمتجر</button>
        <button className="--but bg-transparent border-[1px] border-[#9E9E9E] text-[#9E9E9E] w-[178px]">
          تصفح السلة
        </button>
      </div>
    </div>
  );
};

export default EmptyWishList;
