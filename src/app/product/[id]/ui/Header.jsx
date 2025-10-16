"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeftIcon, HomeIcon } from "@/src/components/icons";

const Header = ({ product }) => {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const router = useRouter();
  return (
    <div className="product_header  flex items-center gap-3 border-b-[1px] border-[#F4F6F8] px-[100px] h-[56px] rounded-[8px]">
      <div className="flex items-center gap-2">
        <HomeIcon />

        <Link href={"/"} className="text-[#637381] text-[16px] font-semibold">
          الرئيسية
        </Link>
      </div>
      <ArrowLeftIcon color={"#919EAB"} />

      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="text-[var(--main-color)] text-[15px] font-semibold"
        >
          {source === "brand" ? product.brand : product.category[0]}
        </button>
      </div>
      <ArrowLeftIcon color={"#919EAB"} />

      <div className="flex items-center gap-2">
        <span className="text-[var(--main-color)] text-[15px] font-semibold">
          {product.name}
        </span>
      </div>
    </div>
  );
};

export default Header;
