import { getCartAndFavorites } from "@/src/lib/services/getCartAndFavorites";
import { CartItems, EmptyCart } from "./ui";
import { CartSteps } from "@/src/components";

export default async function CartPage() {
  const { cartItems } = await getCartAndFavorites();

  return (
    <section id="cart" className="p-[50px] bg-[#ffffff]">
      <CartSteps currentStep={1} cartItems={cartItems} />
      {!cartItems || cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartItems cart={{ items: cartItems }} />
      )}
    </section>
  );
}
