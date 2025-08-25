import { getServerSession } from "next-auth";
import { CartHeader, EmptyCart } from "./ui";
import CartItem from "./ui/CartItems";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Cart from "@/src/lib/models/cart";

export default async function CartPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div className="p-8">يجب تسجيل الدخول لعرض السلة</div>;
  }

  await connectMongoDB();

  const cart = await Cart.findOne({ userId: session.user._id })
    .populate("items.productId")
    .lean();

  if (!cart || cart.items.length === 0) {
    return (
      <section id="cart" className="p-[50px]">
        <CartHeader />
        <EmptyCart />
      </section>
    );
  }

  return (
    <section id="cart" className="p-[50px]">
      <CartHeader />
      <CartItem cart={cart} />
    </section>
  );
}
