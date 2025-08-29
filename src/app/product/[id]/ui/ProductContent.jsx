"use client";
import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { ShareIcon } from "@/src/components/icons";

const ProductContent = ({ product ,cartItems }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "الوصف" },
    { key: "reviews", label: "المراجعات (5950)" },
    { key: "related", label: "المنتجات ذات الصلة" },
  ];
  return (
    <section id="product_page" className="bg-white">
      <Header product={product} />

      <div className="container">
        <ProductCard product={product} cartItems={cartItems} />
      </div>

      <span className="block w-full bg-[#F4F6F8] h-[1px]" />

      <div className="container flex items-center justify-between p-4">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`transition-colors hover:text-[var(--main-color)] ${
                activeTab === tab.key
                  ? "text-[var(--main-color)] font-medium"
                  : "text-[#959EAD]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ShareIcon />
          <span className="text-[#959EAD] text-base">مشاركة</span>
        </div>
      </div>

      <span className="block m-0 p-0 bg-[#F4F6F8] h-[1px]" />

      <div className="container my-6">
        {activeTab === "description" && (
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="font-medium mb-2">المراجعات</h3>
            <p className="text-gray-700">⭐️⭐️⭐️⭐️☆ (5950 مراجعة)</p>
            <p className="text-gray-600 mt-2">هنا تضع نظام المراجعات.</p>
          </div>
        )}

        {activeTab === "related" && (
          <div>
            <h3 className="font-medium mb-2">منتجات ذات صلة</h3>
            <p className="text-gray-600">
              هنا يمكنك عرض منتجات مشابهة باستخدام `ProductCard`.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductContent;
