import { authOptions } from "@/src/lib/authOptions";
import { getServerSession } from "next-auth";
import { Header, ProfileContent } from "./ui";

export default async function ProfilePage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Unauthorized</p>;
  }

  return (
    <section>
      <Header searchParams={searchParams} />
      <div className="py-[100px] container flex gap-4">
        <ProfileContent user={session.user} searchParams={searchParams} />
      </div>
    </section>
  );
}
