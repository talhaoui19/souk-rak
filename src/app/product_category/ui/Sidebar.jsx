export default function Sidebar() {
  return (
    <aside className="w-64 rounded-xl p-4 hidden md:block">
      {/* <h2 className="text-green-600 font-bold mb-4">أجهزة آبل (1605)</h2> */}
      <h2 className="text-[#100D22] text-lg font-bold mb-2"> الفئات </h2>
      <ul className="space-y-2 text-[#100D22]">
        <li>الكل</li>
        <li>الهواتف الذكية</li>
        <li>الأجهزة اللوحية</li>
        <li>الساعات الذكية</li>
        <li>أجهزة الكمبيوتر</li>
        <li>الساعات الذكية</li>
        <li>إكسسوارات</li>
        <li>تلفزيونات</li>
        <li>الساعات الذكية</li>
        <li>الأجهزة اللوحية</li>
      </ul>

      <div className="h-[1px] bg-[#00000017] mt-4" />

      {/* Filter Price */}
      <div className="mt-4">
        <h2 className="text-[#100D22] text-base font-bold mb-2"> السعر </h2>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="number"
              className="bg-transparent border border-[#C1C1C1] w-[110px] h-[42px] rounded-[4px]"
            />
            <span className="absolute text-[#878690] right-2 top-2">من</span>
          </div>

          <div className="relative">
            <input
              type="number"
              className="bg-transparent border border-[#C1C1C1] w-[110px] h-[42px] rounded-[4px]"
            />
            <span className="absolute text-[#878690] right-2 top-2">الى</span>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="1000"
          className="w-full range-slider mt-6"
        />

        <div className="h-[1px] bg-[#00000017] mt-4" />
      </div>

      {/* Colors */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">اللون</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "bg-red-500",
            "bg-blue-500",
            "bg-yellow-400",
            "bg-purple-500",
            "bg-green-500",
            "bg-gray-500",
          ].map((color, idx) => (
            <span
              key={idx}
              className={`w-8 h-8 rounded-full cursor-pointer ${color}`}
            ></span>
          ))}
        </div>
      </div>
    </aside>
  );
}
