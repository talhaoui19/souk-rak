import { message1, message2, message3 } from "../../assets/index";
import Image from "next/image";
const Newsletter = () => {
  return (
    <div className="relative bg-[var(--main-color)] p-5 py-16 flex flex-col items-center justify-center gap-8">
      <h4 className="text-white text-[40px] font-bold">
        اشترك للحصول على خصومات تصل الى 25٪
      </h4>

      <div className="flex">
        <input
          type="text"
          placeholder="ادخل بريدك الالكتروني  ... "
          className="input bg-transparent border-[1px] border-white text-white pr-3 rounded-[8px] p-2 py-3 w-[350px] h-[50px] text-sm"
        />
        <div className="mr-1">
          <button className="--but w-[120px] bg-white text-[var(--main-color)]">
            اشتراك
          </button>
        </div>
      </div>
      <div className="">
        <Image
          src={message1}
          alt="message-img"
          className="absolute right-40 top-16"
        />
        <Image
          src={message2}
          alt="message-img"
          className="absolute right-20 top-1/2"
        />
        <Image
          src={message3}
          alt="message-img"
          className="absolute left-10 top-16"
        />
      </div>
    </div>
  );
};

export default Newsletter;
