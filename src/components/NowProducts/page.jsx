import {
  matebook,
  matebook2,
  matebook3,
  matebook4,
  matebook5,
} from "../../assets/index";
import Image from "next/image";
import Header from "./Header";
import getProductgetProductsByCategory from "@/src/lib/services/getProductsByCategory";
import ProductCard from "../ProductCard/page";

export default async function NowProducts() {
  const { products, cartItems, favoriteIds } =
    await getProductgetProductsByCategory("وصل حديثا");
  return (
    <section className="best-products pt-[100px]">
      <Header />
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
    // END NEW PRODUCTS COMPONENT
  );
}
