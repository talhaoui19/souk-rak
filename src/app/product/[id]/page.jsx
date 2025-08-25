import { connectMongoDB } from "@/src/lib/db";
import Product from "@/src/lib/models/product";
import ProductContent from "./ui/ProductContent";
import RelatedProducts from "./ui/RelatedProducts";

export default async function ProductPage({ params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findById(id).lean();

  if (!product) {
    return <div className="p-10 text-center"> المنتج غير موجود</div>;
  }

  return (
    <>
      <ProductContent product={product} />

      <RelatedProducts
        productCategory={product.category}
        currentProductId={product._id}
      />
    </>
  );
}
