import Image from "next/image";
import Link from "next/link";
import { loginlogo } from "../../../assets";
import { RegisterForm, FeaturesList } from "@/components";

const RegisterPage = () => {
  return (
    <section id="register" className="py-[100px]">
      <div className="container flex gap-8 border border-black/10 rounded-[8px]">
        <div className="p-10">
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-black text-[#174086]">
              إنشاء حساب جديد
              <Image src={loginlogo} alt="loginlogo" />
            </h3>
            <p className="text-[#919EAB] text-[17px] mt-2.5">
              من الرائع انضمامك الينا، نتمنى لك تجربة تسوق ممتعة
            </p>
          </div>

          <RegisterForm />

          <span className="text-[#9E9E9E] block text-center text-[15px] mt-4">
            - أو -
          </span>

          <Link href="/signin">
            <button className="--but bg-transparent text-[#26B356] border border-[#26B356] w-[450px] mt-2.5">
              تسجيل الدخول
            </button>
          </Link>
        </div>

        <div className="w-px h-[132vh] bg-black/10" />

        <div>
          <div className="p-10">
            <h3 className="text-xl font-bold text-[#174086]">
              لديك حساب بالفعل في سوق راك؟
            </h3>
            <Link href="/signin">
              <button className="--but bg-transparent text-[#26B356] border border-[#26B356] w-[400px] mt-5">
                تسجيل الدخول
              </button>
            </Link>
          </div>

          <FeaturesList />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
