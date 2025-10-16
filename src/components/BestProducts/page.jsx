import Product from "@/src/lib/models/Product";
import { connectMongoDB } from "@/src/lib/db";
import ProductCard from "../ProductCard/page";
import HeaderSection from "./Header";
import { getCartAndFavorites } from "@/src/lib/services/getCartAndFavorites";

export default async function BestProducts() {
  await connectMongoDB();
  const products = await Product.find({ category: "أفضل المنتجات" }).lean();
  const { cartItems, favoriteIds } = await getCartAndFavorites();

  return (
    <section className="best-products pb-[150px]">
      <HeaderSection />
      <div className="mt-10 grid grid-cols-4 gap-8">
        {products.map((product) => {
          const isFavorite = favoriteIds.includes(product._id.toString());
          return (
            <ProductCard
              key={product._id}
              product={product}
              cartItems={cartItems}
              isFavorite={isFavorite}
            />
          );
        })}
      </div>
    </section>
  );
}
