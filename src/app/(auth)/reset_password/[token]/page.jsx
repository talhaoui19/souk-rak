import { newpassword } from "@/src/assets";
import { ResetPasswordForm } from "@/src/components";
import Image from "next/image";


export default function PasswordResetConfirm() {
  return (
    <div className="py-[160px] flex items-center justify-center">
      <div className="w-[620px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[8px] px-9 py-5">
        <div className="flex items-center gap-2 text-2xl font-black text-[#174086]">
          <h2>تعيين كلمة مرور جديدة </h2>
          <Image src={newpassword} alt="password-img" />
        </div>
        <p className="text-[#919EAB] text-[16px] mt-[10px]">
          من خلال إنشاء كلمة مرور قوية يمكنك الحفاظ على أمان معلوماتك الشخصية
        </p>
        <ResetPasswordForm />
      </div>
    </div>
  );
}
