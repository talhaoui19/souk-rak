import { UpdateProfileImageCard } from "@/src/components";
import { authOptions } from "@/src/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function UpdateImage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="py-[160px] flex flex-col items-center justify-center space-y-4">
      <div className="w-[620px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[8px] px-9 py-5">
        <UpdateProfileImageCard user={session.user} />
      </div>
    </div>
  );
}
