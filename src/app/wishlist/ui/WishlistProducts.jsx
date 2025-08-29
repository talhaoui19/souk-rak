/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { WishHeartIcon } from "@/src/components/icons";
import CartIcon from "@/src/components/icons/Cart";

const WishlistProducts = ({
  items,
  handleDeleteItem,
  handleMoveToCart,
  isLoading,
}) => {
  return (
    <div className="relative">
      {items.map((item) => (
        <div key={item._id} className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <Link href={`/product/${item.productId._id}`}>
              <img
                src={item.productId.images[0]}
                alt={item.productId.name}
                className="w-[80px] h-[80px] object-cover rounded-md"
              />
            </Link>
            <div>
              <h3 className="font-semibold text-[#174086] text-base">
                {item.productId.name}
              </h3>
              <div className="mt-2">
                <span
                  className={`text-base font-semibold ml-2 ${
                    item.productId.discount > 0
                      ? "line-through text-[#CACACA]"
                      : "text-[var(--main-color)]"
                  }`}
                >
                  {item.productId.price}.00 دج{" "}
                </span>
                {item.productId.discount > 0 && (
                  <span className="text-[var(--main-color)] text-base font-semibold">
                    {(
                      item.productId.price -
                      (item.productId.price * item.productId.discount) / 100
                    ).toFixed(2)}{" "}
                    دج
                  </span>
                )}
              </div>
              <button
                onClick={() => handleMoveToCart(item)}
                className="text-sm font-medium hover:text-[var(--main-color)] mt-1"
              >
                أضف للسلة
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleDeleteItem(item)}
              className="w-11 h-11 flex items-center justify-center border-[2px] border-[#F4F6F8] rounded-full"
            >
              <WishHeartIcon />
            </button>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-50">
          <div className="w-7 h-7 border-2 border-[var(--main-color)] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default WishlistProducts;
