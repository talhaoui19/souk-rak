import OrderListPage from "./OrdersList";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";

export default function ProfileContent({ user, searchParams }) {
  const activeTab = searchParams?.tab || "account";

  return (
    <>
      <ProfileMenu activeTab={activeTab} />
      <div className="flex-1">
        {activeTab === "account" && <ProfileCard user={user} />}
        {activeTab === "orders" && <OrderListPage />}
      </div>
    </>
  );
}
