import { connectMongoDB } from "@/src/lib/db";
import { Header, Pagination, Sidebar } from "../ui";
import { EmptyBox, ProductCard, ToolBar } from "@/src/components";
import { getCartAndFavorites } from "@/src/lib/services";
import Product from "@/src/lib/models/Product";

export default async function Page() {
  await connectMongoDB();
  const category = "تلفزيونات";
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
