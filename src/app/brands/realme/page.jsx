import { EmptyBox, ProductCard, SideBar, ToolBar } from "@/src/components";
import { Header } from "../ui";
import { connectMongoDB } from "@/src/lib/db";
import Product from "@/src/lib/models/Product";
import { getCartAndFavorites } from "@/src/lib/services";

export default async function Page() {
  await connectMongoDB();
  const brand = "ريالمي";
  const products = await Product.find({ brand: brand }).lean();
  const { cartItems, favoriteIds } = await getCartAndFavorites();
  return (
    <main className="pb-32">
      <Header
        name={"realme"}
        image={
          "https://res.cloudinary.com/dzvf36zth/image/upload/v1757334150/Screenshot_2025-09-08_141433-removebg-preview_hw4i4v.png"
        }
        bg={"#ffca0d"}
        width={120}
        height={120}
      />

      {products.length > 0 && <ToolBar title={brand} total={products.length} />}
      <div className="container mx-auto flex gap-6 px-4 mt-6">
        {products.length > 0 && (
          <>
            <SideBar />
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => {
                  const isFavorite = favoriteIds.includes(
                    product._id.toString()
                  );
                  return (
                    <ProductCard
                      key={product._id}
                      source={"brand"}
                      product={product}
                      cartItems={cartItems}
                      isFavorite={isFavorite}
                    />
                  );
                })}
              </div>
              {/* <Pagination /> */}
            </div>
          </>
        )}
      </div>
      {products.length === 0 && <EmptyBox title={"brand"} />}
    </main>
  );
}
