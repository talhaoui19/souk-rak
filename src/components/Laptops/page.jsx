import LaptopCard from "./ui/LaptopCard";
import getProductgetProductsByCategory from "@/src/lib/services/getProductsByCategory";

export default async function LaptopsSection() {
  const { products, cartItems, favoriteIds } =
    await getProductgetProductsByCategory("لابتوب مميز");
  return (
    <div className="grid grid-cols-3 justify-items-center gap-4 mt-[100px]">
      {products.map((product, idx) => (
        <LaptopCard key={idx} product={product} />
      ))}
    </div>
  );
}
