import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <h2 className="text-4xl text-[var(--main-color)] font-bold">
        ماركات مشهورة
      </h2>
      <span className="text-lg text-[#9E9E9E] font-semibold">
        تحقق من أفضل منتجاتنا مبيعًا على سوقـ راكـ الآن
      </span>
    </div>
  );
};

export default Header;
