/* eslint-disable @next/next/no-img-element */
import { DeleteIcon } from "@/src/components/icons";
import Link from "next/link";

const CartProducts = ({
  items,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleDeleteItem,
  isLoading,
}) => {
  return (
    <div className="relative col-span-5">
      {items.map((item) => (
        <>
          <div key={item._id} className="flex items-center justify-between">
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
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 relative -top-4">
            <button
              className="w-[35px] h-[35px] flex items-center justify-center border-[2px] border-[#F4F6F8] rounded-full hover:bg-[var(--main-color)] hover:text-[#ffff] hover:border-[var(--main-color)] transition-[0.8s]"
              onClick={() => handleDecreaseQuantity(item)}
            >
              -
            </button>
            <span className="w-[38px] h-[38px] flex items-center justify-center border-[2px] border-[#F4F6F8]">
              {item.quantity}
            </span>
            <button
              className="w-[35px] h-[35px] flex items-center justify-center border-[2px] border-[#F4F6F8] rounded-full hover:bg-[var(--main-color)] hover:text-[#ffff] hover:border-[var(--main-color)] transition-[0.8s]"
              onClick={() => handleIncreaseQuantity(item)}
            >
              +
            </button>
            <button
              onClick={() => handleDeleteItem(item)}
              className="w-[38px] h-[38px] flex items-center justify-center bg-[#f8f8f8] rounded-[4px]"
            >
              <DeleteIcon />
            </button>
          </div>
        </>
      ))}
      {isLoading && (
        <div className="absolute inset-0 bg-[#ffffff] bg-opacity-60 flex justify-center pt-24 z-50">
          <div className="w-7 h-7 border-2 border-[var(--main-color)] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
