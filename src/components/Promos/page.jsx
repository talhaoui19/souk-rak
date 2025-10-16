import { Promos } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";

const PromosPage = () => {
  return (
    <section className="flex items-center gap-4 pb-[100px]">
      {Promos.map((promo, index) => {
        return (
          <div
            key={index}
            style={{ backgroundImage: `url(${promo.bgImg})` }}
            className="relative w-[600px] bg-cover bg-center h-full rounded-[8px]"
          >
            <div className="flex items-start p-5">
              <div className="mt-[30px]">
                <h1 className="text-[24px] text-[#3B3C3F] font-bold">
                  {promo.title}
                </h1>
                <p className="text-[16px] leading-6 text-[#6A7187] font-medium w-[300px]">
                  {promo.desc}
                </p>
              </div>
              <Image
                src={promo.img}
                alt="freebuds-img"
                className="w-[204px] h-[204px]"
              />
            </div>
            <div className="absolute bottom-5">
              <Link
                href={promo.link}
                className="text-[17px] font-semibold text-[#3B3C3F] p-5"
              >
                تسوق الآن
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PromosPage;
