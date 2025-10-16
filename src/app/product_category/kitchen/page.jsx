import Product from "@/src/lib/models/Product";
import { connectMongoDB } from "@/src/lib/db";
import { Header, Pagination, ProductCard, Sidebar } from "../ui";
import { getCartAndFavorites } from "@/src/lib/services";
import { EmptyBox, ToolBar } from "@/src/components";

export default async function Page() {
  await connectMongoDB();
  const category = "المطبخ";
  const products = await Product.find({ category: category }).lean();
  const { cartItems, favoriteIds } = await getCartAndFavorites();
  return (
    <main className="min-h-screen">
      <Header category={category} />
      {products.length > 0 && (
        <ToolBar title={category} total={products.length} />
      )}
      <div className="container mx-auto flex gap-6 px-4 mt-6">
        {products.length > 0 && (
          <>
            <Sidebar />
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => {
                  const isFavorite = favoriteIds.includes(
                    product._id.toString()
                  );
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
              <Pagination />
            </div>
          </>
        )}
      </div>
      {products.length === 0 && <EmptyBox />}
    </main>
  );
}
