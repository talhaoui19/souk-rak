import Link from "next/link";

const Header = ({ searchParams }) => {
  const activeTab = searchParams?.tab || "account";

  const titles = {
    account: "تعديل بيانات الحساب",
    orders: "قائمة الطلبات",
  };

  const currentTitle = titles[activeTab];
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <h2 className="text-6xl font-bold"> {currentTitle} </h2>
      <span className="mt-4">
        {" "}
        <Link href={"/"} className="hover:underline">
          الرئيسية
        </Link>{" "}
        » {currentTitle}
      </span>
    </div>
  );
};

export default Header;
