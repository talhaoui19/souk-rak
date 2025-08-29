import { authOptions } from "@/src/lib/authOptions";
import {
  NavbarTop,
  NavbarCenter,
  NavbarEnd,
  NavbarAnnouncement,
} from "./index";

import { getServerSession } from "next-auth";
import Cart from "@/src/lib/models/cart";
import Wishlist from "@/src/lib/models/wishlist";
import { connectMongoDB } from "@/src/lib/db";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  let cartCount = 0;
  let totalPrice = 0;
  let wishlistCount = 0;

  if (session) {
    await connectMongoDB();
    const cart = await Cart.findOne({ userId: session.user._id })
      .populate("items.productId")
      .lean();
    if (cart) {
      cartCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);
      totalPrice = cart.items.reduce(
        (acc, item) => acc + item.quantity * item.productId.price,
        0
      );
    }

    const wishlist = await Wishlist.findOne({ userId: session.user._id })
      .populate("items.productId")
      .lean();

    if (wishlist) {
      wishlistCount = wishlist.items.length;
    }
  }
  return (
    // START NAVBAR COMPONENT
    <div className="navbar">
      <NavbarAnnouncement />
      <NavbarTop />
      <NavbarCenter
        session={session}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        totalPrice={totalPrice}
      />
      <NavbarEnd />
    </div>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
