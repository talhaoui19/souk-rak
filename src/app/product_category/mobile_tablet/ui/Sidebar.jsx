export default function Sidebar() {
  return (
    <aside className="w-64 bg-white rounded-xl shadow p-4 hidden md:block">
      <h2 className="text-green-600 font-bold mb-4">أجهزة آبل (1605)</h2>
      <ul className="space-y-2 text-gray-700">
        <li>الكل</li>
        <li>الهواتف الذكية</li>
        <li>الأجهزة اللوحية</li>
        <li>الساعات الذكية</li>
        <li>أجهزة الكمبيوتر</li>
        <li>إكسسوارات</li>
      </ul>

      {/* Filter Price */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">السعر</h3>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>

      {/* Colors */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">اللون</h3>
        <div className="flex flex-wrap gap-2">
          {["bg-red-500","bg-blue-500","bg-yellow-400","bg-purple-500","bg-green-500","bg-gray-500"]
            .map((color, idx) => (
            <span
              key={idx}
              className={`w-6 h-6 rounded-full cursor-pointer ${color}`}
            ></span>
          ))}
        </div>
      </div>
    </aside>
  );
}
