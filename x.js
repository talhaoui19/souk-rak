import styles from "../../style";
import { hero, heroTitle } from "../../assets/index";
import Image from "next/image";
const Hero = () => {
  return (
    // START HERO COMPONENT
    <div className="hero relative mt-[180px] mb-[20px]">
      <div
        className={`${styles.flexColumn} md:flex-row md:justify-between gap-[]`}
      >
        <div className="hero-content w-[100%] lg:w-[50%] ">
          <div className="hero-title">
            <Image src={heroTitle} alt="hero-title" />
            <p className="text-[#1F222A] text-[18px] font-bold max-w-[] leading-[40px] mt-[18px]">
              كاميرا أمامية مزدوجة بورتريه فائقة بدقة ‎60 MP‎ | ‏زجاج كونلون
              متين‏ شحن ‎100 W‎ HUAWEI SuperCharge Turbo
            </p>
            <div className={`buttons ${styles.flexStart} gap-4 mt-[5px]`}>
              <a href="#services" className="mt-[15px] block">
                <button className="--but w-[155px]">تعرف على المزيد</button>
              </a>
              <a href="#services" className="mt-[15px] block">
                <button className="--but bg-[#F5F5F5] text-[#35383F] w-[115px]">
                  شراء
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <figure>
            <Image
              src={hero}
              alt="hero-image"
              className="w-[900px] h-[452px] object-cover mt-[-200px]"
            />
          </figure>
        </div>
        <div
          className={`points absolute bottom-[-35px] left-[50%] translate-x-[-50%] ${styles.flex} justify-end gap-1 mt-[30px] hidden xl:flex`}
        >
          <div className="w-[19px] h-[13px] rounded-[13px] bg-[var(--main-color)] cursor-pointer"></div>
          <div className="w-[19px] h-[13px] rounded-[13px] bg-[#F1F1F1] cursor-pointer"></div>
          <div className="w-[19px] h-[13px] rounded-[13px] bg-[#F1F1F1] cursor-pointer"></div>
        </div>
      </div>
    </div>
    // END HERO COMPONENT
  );
};

export default Hero;














    <div key={order._id} className="border p-4 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
              <p>
                <span className="font-bold">كود الطلب:</span>{" "}
                {order._id.toString()}
              </p>
              <p>
                <span className="font-bold">الحالة:</span>{" "}
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </p>
            </div>

            {/* المنتجات */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">المنتجات:</h3>
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b py-2"
                >
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p>السعر: {item.price} د.ج</p>
                    <p>الكمية: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* تفاصيل العميل */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">تفاصيل العميل:</h3>
              <p>الاسم: {order.customerInfo.fullName}</p>
              <p>الهاتف: {order.customerInfo.phone}</p>
              <p>العنوان: {order.customerInfo.address}</p>
              {order.customerInfo.city && (
                <p>المدينة: {order.customerInfo.city}</p>
              )}
              {order.customerInfo.state && (
                <p>الولاية: {order.customerInfo.state}</p>
              )}
              {order.customerInfo.note && (
                <p>ملاحظة: {order.customerInfo.note}</p>
              )}
            </div>

            {/* المجموع */}
            <div className="flex justify-end gap-4 font-bold text-lg">
              <p>المجموع قبل الخصم: {order.subtotal} د.ج</p>
              <p>الخصم: {order.discountTotal} د.ج</p>
              <p>المجموع الكلي: {order.total} د.ج</p>
            </div>
          </div>