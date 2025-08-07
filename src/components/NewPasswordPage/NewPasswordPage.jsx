import Image from "next/image";
import { newpassword, lock } from "../../assets/index";

const NewPasswordPage = () => {
  return (
    // START PASSWORD PAGE COMPONENT
    <div className="py-[160px] flex flex-col items-center justify-center">
      <div className="w-[620px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[8px] px-9 py-5">
        <div className="flex items-center gap-2 text-2xl font-black text-[#174086]">
          <h2>إنشاء كلمة سر جديدة </h2>
          <Image src={newpassword} alt="password-img" />
        </div>
        <p className="text-[#919EAB] text-[16px] mt-[10px]">
          من خلال إنشاء كلمة مرور قوية يمكنك الحفاظ على أمان معلوماتك الشخصية
        </p>
        <div className="password-input  flex flex-col gap-3 mt-[20px]">
          <label
            htmlFor=""
            className="text-[#174086] text-[17px] font-semibold"
          >
            كلمة السر الجديده
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="●●●●●●●●●●●●"
              className="bg-[rgb(247_247_247)] w-[100%] h-[55px] rounded-[8px] pr-[48px] "
            />
            <Image
              src={lock}
              alt="lock"
              className="w-[14px] h-[16px] absolute top-[18px] right-[20px]"
            />
          </div>
        </div>
        <div className="password-input  flex flex-col gap-3 mt-[20px]">
          <label
            htmlFor=""
            className="text-[#174086] text-[17px] font-semibold"
          >
            أعادة كلمة السر الجديده
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="●●●●●●●●●●●●"
              className="bg-[rgb(247_247_247)] w-[100%] h-[55px] rounded-[8px] pr-[48px] "
            />
            <Image
              src={lock}
              alt="lock"
              className="w-[14px] h-[16px] absolute top-[18px] right-[20px]"
            />
          </div>
        </div>
        <div className="mt-[15px]">
          <button className="--but w-[100%]">تاكيد</button>
        </div>
        <div>
          <h4 className="text-[#919EAB] text-[16px] font-semibold mt-[25px] mb-[10px] text-center">
            ليس لديك حساب فى سوق راك ؟{" "}
            <span className="text-[var(--main-color)] hover:underline cursor-pointer">
              إنشاء حساب جديد
            </span>
          </h4>
        </div>
      </div>
    </div>
    // END PASSWORD PAGE COMPONENT
  );
};

export default NewPasswordPage;
