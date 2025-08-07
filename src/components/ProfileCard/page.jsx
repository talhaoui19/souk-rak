import { ProfileForm } from "..";

export default function ProfileCard({ user }) {
  return (
    <div className="shadow-[0px_7px_85px_0px_#1C4FA512] border-[1px] border-[#F6F6F6] rounded-[8px] py-8 px-6 w-full">
      <h1 className="text-[var(--main-color)] text-xl font-semibold">
        معلومات الحساب
      </h1>
      <ProfileForm user={user} />
    </div>
  );
}
