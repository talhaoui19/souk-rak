import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SettingsDropDown from "./components/SettingsDropDown";
import { ProfileCard } from "@/components";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Unauthorized</p>;
  }

  return (
    <section>
      <div className="py-[100px]">
        <div className="container flex gap-4">
          <SettingsDropDown />
          <ProfileCard user={session.user} />
        </div>
      </div>
    </section>
  );
}
