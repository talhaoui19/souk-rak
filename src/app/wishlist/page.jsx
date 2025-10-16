import { EmptyWishList, WishListHeader, WishlistItem } from "./ui";
import { getWishlist } from "@/src/lib/services/getWishlist";

export default async function WishlistPage() {
  const wishlist = await getWishlist();

  return (
    <section id="wishlist" className="p-[50px] bg-[#ffffff]">
      <WishListHeader />
      {!wishlist ||
      wishlist.items.filter((item) => item.productId).length === 0 ? (
        <EmptyWishList />
      ) : (
        <WishlistItem wishlist={wishlist} />
      )}
    </section>
  );
}
