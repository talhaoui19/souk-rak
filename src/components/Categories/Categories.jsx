import styles from "../../style";
import Image from "next/image";
import { categoriesData } from "@/src/constants";
import Link from "next/link";
import { basket } from "@/src/assets";

const Categories = () => {
  return (
    <section className="categories py-[100px]">
      <div className="main-title">
        <h4 className={`text-[21px] font-extrabold ${styles.flexStart}`}>
          تسوق حسب الفئات <Image src={basket} alt="basket-img" />
        </h4>
        <p className="text-[#787878] text-[15px] font-bold mt-[10px]">
          تسوق احدث المنتجات المميزة المضافة جديد
        </p>
      </div>
      <div className="categories-boxs grid grid-cols-9 gap-5 mt-[25px]">
        {categoriesData.map((cat, index) => {
          return (
            <Link
              key={index}
              href={cat.link}
              className={`categorie-box  ${styles.flexColumn} items-center`}
            >
              <div className="bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
                <figure>
                  <Image src={cat.img} quality={100} alt={cat.label} />
                </figure>
              </div>
              <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
                {cat.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
