import { connectMongoDB } from "@/src/lib/db";
import Product from "@/src/lib/models/product";
import ProductContent from "./ui/ProductContent";
import RelatedProducts from "./ui/RelatedProducts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import Cart from "@/src/lib/models/cart";
import Wishlist from "@/src/lib/models/wishlist";

export default async function ProductPage({ params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findById(id).lean();

  if (!product) {
    return <div className="p-10 text-center"> المنتج غير موجود</div>;
  }

  const session = await getServerSession(authOptions);
  let cartItems = [];
  let isFavorite = false;

  if (session) {
    const cart = await Cart.findOne({ userId: session.user._id })
      .populate("items.productId")
      .lean();

    if (cart) {
      cartItems = cart.items;
    }

    const wishlist = await Wishlist.findOne({
      userId: session.user._id,
      "items.productId": product._id,
    }).lean();

    isFavorite = !!wishlist;
  }

  return (
    <>
      <ProductContent
        product={{ ...product, isFavorite }}
        cartItems={cartItems}
      />

      <RelatedProducts
        productCategory={product.category}
        currentProductId={product._id}
      />
    </>
  );
}
