import { useCart } from "@/src/hooks/useCart";
import { HeartIcon, WishHeartIcon } from "../../icons";
import { useWishlist } from "@/src/hooks/useWishlist";

const ProductActions = ({ product, cartItems, inWishlist, setInWishlist }) => {
  const { isLoading, handleAddToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishIsLoading } = useWishlist();
  return (
    <div className="flex items-center gap-2 mt-5">
      <button
        className="--but bg-transparent w-[179px] h-[57px] text-[var(--main-color)] border-[1px] border-[var(--main-color)]"
        onClick={() => handleAddToCart(product, 1, cartItems)}
      >
        {isLoading ? (
          <div className="--spr border-[var(--main-color)] border-r-transparent" />
        ) : (
          "أضف للسلة"
        )}
      </button>
      <div className="relative h-[57px]">
        <button
          className="--but bg-transparent flex items-center justify-center w-[75px] h-[57px] text-[var(--main-color)] border-[1px] border-[#CDCDCD]"
          onClick={async () => {
            if (inWishlist) {
              await removeFromWishlist(product._id);
              setInWishlist(false);
            } else {
              const res = await addToWishlist(product._id);
              if (res.ok) {
                setInWishlist(true);
              }
            }
          }}
          disabled={wishIsLoading}
        >
          {wishIsLoading ? (
            <div className="--spr border-[var(--main-color)] border-r-white" />
          ) : inWishlist ? (
            <WishHeartIcon />
          ) : (
            <HeartIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
