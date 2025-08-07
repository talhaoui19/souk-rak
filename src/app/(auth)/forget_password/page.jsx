import Image from "next/image";
import { password, egybt } from "../../../assets/index";
import Link from "next/link";

const PasswordPage = () => {
  return (
    // START PASSWORD PAGE COMPONENT
    <div className="py-[160px] flex flex-col items-center justify-center">
      <div className="w-[620px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[8px] px-9 py-5">
        <div className="flex items-center gap-2 text-2xl font-black text-[#174086]">
          <h2>هل نسيت كلمة السر </h2>
          <Image src={password} alt="password-img" />
        </div>
        <p className="text-[#919EAB] text-[16px] mt-[10px]">
          لا تقلق يمكنك انشاء كلمة سر جديده من خلال ادخال بريدك الالكتروني
          المسجل لدينا{" "}
        </p>
        <div className="phone-input flex flex-col gap-3 mt-[20px]">
          <label
            htmlFor=""
            className="text-[#174086] text-[17px] font-semibold"
          >
            البريد الالكتروني
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-[rgb(247_247_247)] w-[100%] h-[55px] rounded-[8px] pr-[55px]"
              placeholder="أكتب بريدك الالكتروني هنا"
            />
            {/* <Image
              src={egybt}
              alt="egybt-img"
              className="absolute top-[18px] right-[15px]"
            /> */}
          </div>
        </div>
        <div className="mt-[15px]">
          {/* <Button
            bg="bg-[#26B356] h-[54px]"
            text="text-white"
            width="w-[100%]"
            title=" "
          /> */}
          <button className="--but w-full"> ارسال الرمز</button>
        </div>
        <div>
          <h4 className="text-[#919EAB] text-[16px] font-semibold mt-[25px] mb-[10px] text-center">
            ليس لديك حساب فى سوق راك ؟{" "}
            <Link href="/register" className="text-[var(--main-color)] hover:underline cursor-pointer">
              إنشاء حساب جديد
            </Link>
          </h4>
        </div>
      </div>
    </div>
    // END PASSWORD PAGE COMPONENT
  );
};

export default PasswordPage;
