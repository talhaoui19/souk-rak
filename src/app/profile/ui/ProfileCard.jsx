import ProfileForm from "./ProfileForm";

export default function ProfileCard({ user }) {
  return (
    <section className="bg-white rounded-[12px] py-8 px-6 w-full">
      <h1 className="text-[var(--main-color)] text-xl font-semibold">
        معلومات الحساب
      </h1>
      <ProfileForm user={user} />
    </section>
  );
}
