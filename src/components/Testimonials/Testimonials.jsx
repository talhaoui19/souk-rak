import styles from "../../style";
import { love, left, right, testimonial, star } from "../../assets/index";
import Image from "next/image";
const Testimonials = () => {
  return (
    // START TESTIMONIALS COMPONENT
    <div className="testimonials py-[100px]">
      <div className="main-title flex items-center justify-between">
        <div>
          <h4 className={`text-[22px] font-extrabold ${styles.flexStart}`}>
            آراء العملاء <Image src={love} alt="love-img" />
          </h4>
        </div>
        <div className="buttons flex items-center gap-2">
          <Image
            src={left}
            alt="left-button-img"
            className="w-[34px] h-[34px]"
          />
          <Image
            src={right}
            alt="right-button-img"
            className="w-[34px] h-[34px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-[50px]">
        <div className="bg-[rgba(233,233,233,0.25)] px-4 pt-7 pb-3 rounded-xl">
          <span className="flex text-base">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا
            النص من مولد النص العربى حيث يمكنك
          </span>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <Image src={testimonial} alt="testimonial-img" />
              <span className="text-sm font-semibold">حاتم خطاب</span>
            </div>
            <Image src={star} alt="star-img" className="w-[135px] h-[20px]" />
          </div>
        </div>
        <div className="bg-[rgba(233,233,233,0.25)] px-4 pt-7 pb-3 rounded-xl">
          <span className="flex text-base">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا
            النص من مولد النص العربى حيث يمكنك
          </span>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <Image src={testimonial} alt="testimonial-img" />
              <span className="text-sm font-semibold">حاتم خطاب</span>
            </div>
            <Image src={star} alt="star-img" className="w-[135px] h-[20px]" />
          </div>
        </div>
        <div className="bg-[rgba(233,233,233,0.25)] px-4 pt-7 pb-3 rounded-xl">
          <span className="flex text-base">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا
            النص من مولد النص العربى حيث يمكنك
          </span>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <Image src={testimonial} alt="testimonial-img" />
              <span className="text-sm font-semibold">أحمد ابراهيم</span>
            </div>
            <Image src={star} alt="star-img" className="w-[135px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
    // END TESTIMONIALS COMPONENT
  );
};

export default Testimonials;
