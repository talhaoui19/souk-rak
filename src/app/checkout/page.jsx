import { getCartAndFavorites } from "@/src/lib/services";
import { CheckoutItems } from "./ui";
import { CartSteps } from "@/src/components";

export default async function Page() {
  const { cartItems } = await getCartAndFavorites();

  return (
    <section id="checkout" className="p-[50px] bg-[#ffffff]">
      <CartSteps currentStep={2} cartItems={cartItems} />
      {!cartItems || cartItems.length === 0 ? (
        ""
      ) : (
        <CheckoutItems cart={{ items: cartItems }} />
      )}
    </section>
  );
}
