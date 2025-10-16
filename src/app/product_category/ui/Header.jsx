import Link from "next/link";

const Header = ({ category }) => {
  const bestDiscounts = "أفضل الخصومات";
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 ${
        category === bestDiscounts ? "bg-[#f00e0ecb]" : "bg-gray-100"
      }`}
    >
      <h2
        className={`text-6xl ${
          category === bestDiscounts ? "text-[#ffff]" : "text-[#333333]"
        } font-bold`}
      >
        {category}{" "}
      </h2>
      <span
        className={`${
          category === bestDiscounts ? "text-[#ffff]" : "text-[#555555]"
        } mt-4`}
      >
        {" "}
        <Link href={"/"} className="hover:underline">
          الرئيسية
        </Link>{" "}
        » {category}
      </span>
    </div>
  );
};

export default Header;
