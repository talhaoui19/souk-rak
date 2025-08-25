import Image from "next/image";
import AuthButtons from "./AuthButtons";
import Link from "next/link";
import { loginlogo } from "@/src/assets";
import { FeaturesList, SignInForm } from "@/src/components";

const LoginPage = async () => {
  return (
    <section className="py-[100px]">
      <div className="container flex gap-8 border border-black/10 rounded-[8px]">
        <div className="p-10">
          <div>
            <h3 className="flex items-center gap-2 text-3xl font-black text-[#174086]">
              أهلا بعودتك
              <Image src={loginlogo} alt="loginlogo" />
            </h3>
            <p className="text-[#919EAB] text-[17px] mt-2.5">
              ادخال بيانات حسابك حتي تتمكن من التمتع بالتسوق
            </p>
          </div>
          <SignInForm />
          <span className="text-[#9E9E9E] block text-center text-[15px] mt-4">
            - أو -
          </span>
          <AuthButtons />
        </div>
        <div className="w-px h-[132vh] bg-black/10" />
        <div>
          <div className="p-10">
            <h3 className="text-2xl font-bold text-[#174086]">
              مميزات عضوية موقعنا
            </h3>
            <Link href="/register">
              <button className="--but bg-[transparent] text-[#26B356] border-[1px] border-[#26B356] w-[400px] mt-[20px]">
                سجل حساب جديد الآن
              </button>
            </Link>
          </div>
          <FeaturesList />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
