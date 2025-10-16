import ProductContent from "./ui/ProductContent";
import { getCartAndFavorites } from "@/src/lib/services/getCartAndFavorites";
import RelatedProducts from "./ui/RelatedProducts";
import { getProductById } from "@/src/lib/services/getProductById";

export default async function ProductPage({ params }) {
  const product = await getProductById(params.id);
  const { cartItems, favoriteIds } = await getCartAndFavorites();
  const isFavorite = favoriteIds.includes(product._id.toString());

  if (!product) {
    return <div className="p-10 text-center"> المنتج غير موجود</div>;
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
