import Link from "next/link";
import ProductCard from "./ui/ProductCard";
import Sidebar from "./ui/Sidebar";
import { connectMongoDB } from "@/src/lib/db";
import Product from "@/src/lib/models/product";

export default async function Page() {
  await connectMongoDB();
  const products = await Product.find({ category: "موبايل و تابلت" }).lean();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-20 bg-gray-100">
        <h2 className="text-[#333333] text-6xl font-bold">موبايل و تابلت</h2>
        <span className="text-[#555555] mt-4">
          {" "}
          <Link href={"/"} className="hover:underline">
            الرئيسية
          </Link>{" "}
          » موبايل و تابلت{" "}
        </span>
      </div>

      <div className="container mx-auto flex gap-6 px-4 mt-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Products */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <ul className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <li
                  key={n}
                  className={`px-3 py-1 border rounded ${
                    n === 1 ? "bg-green-500 text-white" : "bg-white"
                  }`}
                >
                  {n}
                </li>
              ))}
              <li className="px-3 py-1 border rounded bg-green-500 text-white">
                &gt;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
