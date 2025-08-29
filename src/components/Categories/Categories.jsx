import "./Categories.css";
import { basket } from "../../assets/index";
import styles from "../../style";
// import { categoriesBoxs } from "../../constants/index";
import {
  categorie1,
  categorie2,
  categorie3,
  categorie4,
  categorie5,
  categorie6,
  categorie7,
  categorie8,
  categorie9,
  freebuds,
  watch,
} from "../../assets/index";
import Image from "next/image";

const Categories = () => {
  return (
    // START CATEGORIES COMPONENT
    <div className="categories py-[100px]">
      <div className="main-title">
        <h4 className={`text-[21px] font-extrabold ${styles.flexStart}`}>
          تسوق حسب الفئات <Image src={basket} alt="basket-img" />
        </h4>
        <p className="text-[#787878] text-[15px] font-bold mt-[10px]">
          تسوق احدث المنتجات المميزة المضافة جديد
        </p>
      </div>
      <div className="categories-boxs grid grid-cols-9 gap-5 mt-[25px]">
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img w-[120px] h-[110px] flex items-center justify-center border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie1}
                quality={100}
                alt="categorie1"
                className="w-[72px] h-[72px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            الخصومات
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie2}
                quality={100}
                alt="categorie2"
                className="w-[76px] h-[76px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            موبايل و تابلت
          </span>
        </div>
        <div className={`categorie-box  ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie3}
                quality={100}
                alt="categorie3"
                className="w-[82px] h-[54px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            تلفزيونات
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie4}
                quality={100}
                alt="categorie4"
                className="w-[73px] h-[73px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            ساعات
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie5}
                alt="categorie5"
                className="w-[83px] h-[62px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            لاب توب
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie6}
                alt="categorie6"
                className="w-[78px] h-[78px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            مستلزمات المنزل
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie7}
                alt="categorie7"
                className="w-[98px] h-[62px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            المطبخ
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie8}
                alt="categorie8"
                className="w-[89px] h-[84px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            الأثاث
          </span>
        </div>
        <div className={`categorie-box ${styles.flexColumn} items-center`}>
          <div className="categorie-box-img flex items-center justify-center w-[120px] h-[110px] border-[1px] border-[#F6F6F6] rounded-[15px] p-[15px]">
            <figure>
              <Image
                src={categorie9}
                alt="categorie9"
                className="w-[78px] h-[77px]"
              />
            </figure>
          </div>
          <span className="text-[#1F222A] text-[14px] font-semibold mt-[8px]">
            اجهزة رياضية
          </span>
        </div>
      </div>
      <div className="mt-[100px] flex items-center justify-center gap-7">
        <div className="air-puds rounded-[8px] relative">
          <div className="flex items-start p-5">
            <div className="mt-[30px]">
              <h1 className="text-[24px] text-[#3B3C3F] font-bold">
                HUAWEI FreeBuds Pro
              </h1>
              <p className="text-[16px] leading-6 text-[#6A7187] font-medium w-[300px]">
                تقنية إلغاء الضجيج النشط الهجينة تقنية إلغاء الضجيج النشط (ANC)
                الديناميكية والذكية
              </p>
            </div>
            <Image
              src={freebuds}
              alt="freebuds-img"
              className="w-[204px] h-[204px]"
            />
          </div>
          <div className="absolute bottom-5">
            <a className="text-[17px] font-semibold text-[#3B3C3F] p-5">
              تسوق الآن
            </a>
          </div>
        </div>
        <div className="watch rounded-[8px] relative">
          <div className="flex items-start p-5">
            <div className="mt-[30px]">
              <h1 className="text-[24px] text-[#3B3C3F] font-bold">
                HUAWEI WATCH Buds{" "}
              </h1>
              <p className="text-[16px] leading-6 text-[#6A7187] font-medium w-[300px]">
                سماعات وساعة في آن واحد تقنية AI لإلغاء ضجيج المكالمات و إدارة
                احترافية للصحة
              </p>
            </div>
            <Image
              src={watch}
              alt="watch-img"
              className="w-[207px] h-[207px]"
            />
          </div>
          <div className="absolute bottom-5">
            <a className="text-[17px] font-semibold text-[#3B3C3F] p-5">
              تسوق الآن
            </a>
          </div>
        </div>
      </div>
    </div>
    // END CATEGORIES COMPONENT
  );
};

export default Categories;
