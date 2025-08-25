import { password } from "@/src/assets";
import { ResetPasswordRequestForm } from "@/src/components";
import Image from "next/image";
import Link from "next/link";

export default function PasswordResetRequest() {
  return (
    <section className="py-[160px] flex flex-col items-center justify-center">
      <div className="w-[620px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[8px] px-9 py-5">
        <div className="flex items-center gap-2 text-2xl font-black text-[#174086]">
          <h2>هل نسيت كلمة المرور </h2>
          <Image src={password} alt="password-img" />
        </div>
        <p className="text-[#919EAB] text-[16px] mt-[10px]">
          لا تقلق يمكنك انشاء كلمة مرور جديدة من خلال ادخال بريدك الالكتروني
          المسجل لدينا{" "}
        </p>

        <ResetPasswordRequestForm />
        <div>
          <h4 className="text-[#919EAB] text-[16px] font-semibold mt-[25px] mb-[10px] text-center">
            ليس لديك حساب فى سوق راك ؟{" "}
            <Link
              href="/register"
              className="text-[var(--main-color)] hover:underline cursor-pointer"
            >
              إنشاء حساب جديد
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
}
