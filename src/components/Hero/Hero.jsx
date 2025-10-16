/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import styles from "../../style";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hero1, hero2, hero3, hero4 } from "@/src/assets";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    rtl: true,
    appendDots: (dots) => (
      <dispatchEvent>
        {" "}
        <ul>{dots}</ul>{" "}
      </dispatchEvent>
    ),
    customPaging: () => (
      <div className="dot w-[19px] h-[13px] absolute bottom-[100px] rounded-[13px] cursor-pointer"></div>
    ),
  };

  const products = [
    {
      id: 2,
      title: "HUAWEI nova Y73",
      desc: "كاميرا أمامية مزدوجة بورتريه فائقة بدقة 60 MP | 100 W HUAWEI SuperCharge Turbo",
      image: hero4,
      width: 400,
      height: 400,
    },
    {
      id: 1,
      title: "HUAWEI Pura 80 Ultra",
      desc: "شاشة LTPO OLED بقياس 6.8 بوصة بدقة +FHD، وتدعم معدل تحديث 120 هرتز وسطوع يصل إلى 3000 شمعة",
      image: hero3,
      width: 600,
      height: 600,
    },
    {
      id: 2,
      title: "HUAWEI Pura 80",
      desc: "كاميرا أمامية مزدوجة بورتريه فائقة بدقة 60 MP | 100 W HUAWEI SuperCharge Turbo",
      image: hero2,
      width: 500,
      height: 500,
    },
    {
      id: 3,
      title: "Huawei Nova 11 SERIES",
      desc: "كاميرا أمامية مزدوجة بورتريه فائقة بدقة 60 MP | 100 W HUAWEI SuperCharge Turbo",
      image: hero1,
      width: 600,
      height: 600,
    },
  ];

  return (
    <div className="hero bg-white relative mb-[20px]">
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} dir="rtl">
            <div
              className={`${styles.flexColumn} relative container md:flex-row md:justify-between items-center p-4`}
            >
              <div className="hero-content">
                <div className="hero-title">
                  <h2 className="text-4xl font-bold tracking-[0.2px]">
                    {item.title}
                  </h2>
                  <p className="text-[#1F222A] text-[18px] font-bold leading-[40px] mt-[18px]">
                    {item.desc}
                  </p>
                  <div className={`buttons ${styles.flexStart} gap-4 mt-[5px]`}>
                    <a href="#services" className="mt-[15px] block">
                      <button className="--but w-[155px]">
                        تعرف على المزيد
                      </button>
                    </a>
                    <a href="#services" className="mt-[15px] block">
                      <button className="--but bg-[#F5F5F5] text-[#35383F] w-[115px]">
                        شراء
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-image w-full lg:w-[80%] h-[600px] max-h-[600px] flex justify-center">
                <figure>
                  <Image
                    src={item.image}
                    alt="hero-image"
                    className="object-contain"
                    width={item.width}
                    height={item.height}
                    quality={100}
                    className="absolute bottom-[160px] left-[10px]"
                    priority
                  />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
