import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Wishlist from "@/src/lib/models/wishlist";
import { WishListHeader, WishlistItem } from "./ui";
import { emptyWishList } from "@/src/assets";
import Image from "next/image";

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div className="p-8">يجب تسجيل الدخول لعرض المفضلة</div>;
  }

  await connectMongoDB();

  const wishlist = await Wishlist.findOne({ userId: session.user._id })
    .populate("items.productId")
    .lean();

  if (!wishlist || wishlist.items.length === 0) {
    return (
      <section className="p-[50px]">
        <WishListHeader />
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
      </section>
    );
  }

  return (
    <section id="wishlist" className="p-[50px]">
      <WishListHeader />
      <WishlistItem wishlist={wishlist} />
    </section>
  );
}
