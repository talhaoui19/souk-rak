import Image from "next/image";
import {
  logo,
  youtube,
  instagram,
  facebook,
  google,
  ios,
  huawei,
  number,
} from "../../assets/index";
import { footerNavLinks, footerPayments } from "../../constants";
import styles from "../../style";

const Footer = () => {
  return (
    // START FOOTER COMPONENT
    <>
      <div className="bg-[#e5e5e5] h-[1px]" />
      <div className="footer pt-[50px] pb-[10px]">
        <div className="container grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-start gap-4 lg:gap-10">
          <div className="box mt-[15px]">
            <figure>
              <Image src={logo} alt="logo" />
            </figure>
            <p className="text-[#757575] text-[16px] font-bold leading-[30px] mt-[15px]">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة
            </p>
          </div>
          <div>
            <h5 className="text-[var(--main-color)] text-[20px] font-black mr-[12px] my-[12px]">
              حول موقعي{" "}
            </h5>
            <div className={`links ${styles.flexColumn} gap-1`}>
              {footerNavLinks.map((item) => {
                return (
                  <a
                    key={item.id}
                    to={item.id === "home" ? "/" : item.id}
                    className="text-[#757575] text-[16px] font-bold py-[8px] px-[12px]"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h5 className="text-[var(--main-color)] text-[20px] font-black my-[12px]">
              تابعنا على
            </h5>
            <div
              className={`socials-media ${styles.flexStart} gap-4 mt-[20px]`}
            >
              <Image src={youtube} alt="youtube" className="w-[35px]" />
              <Image src={instagram} alt="instagram" className="w-[35px]" />
              <Image src={facebook} alt="facebook" className="w-[35px]" />
            </div>
            <h5 className="text-[var(--main-color)] text-[20px] font-black mt-[40px] my-[12px]">
              نزّل تطبيق يلا
            </h5>
            <div className="download-application mt-[20px]">
              <Image src={google} alt="google" className="mb-[10px]" />
              <Image src={ios} alt="ios" className="mb-[10px]" />
              <Image src={huawei} alt="huawei" />
            </div>
          </div>
        </div>
        <div className="bg-[#e5e5e5] h-[1px] mt-[30px]" />
        <div className="container mt-[10px] flex items-center justify-between">
          <span className="text-[#757575] text-[16px]">
            صنع بإتقان لموقع سوق راكـ | 2023{" "}
          </span>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Image src={number} alt="number-img" />
              <p className="text-[#757575] text-[15px] font-bold flex items-center gap-1">
                الرقم الضريبي :<span className="mt-[4px]">356353563</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              {footerPayments.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-[#F6F6F6] w-[62px] h-[30px] rounded-[6px] flex items-center justify-center cursor-pointer"
                  >
                    <Image src={item.img} alt={item.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
    // END FOOTER COMPONENT
  );
};

export default Footer;
