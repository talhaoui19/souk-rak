import Header from "./Header";
import ProductCard from "../ProductCard/page";
import getProductgetProductsByCategory from "@/src/lib/services/getProductsByCategory";

export default async function NewProducts() {
  const { products, cartItems, favoriteIds } =
    await getProductgetProductsByCategory("جديد المنتجات");
  return (
    <section className="pt-[100px]">
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
  );
}
