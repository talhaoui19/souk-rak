import { useCartTotals } from "../hooks/useCartTotals";

const CartTotals = ({ items, isLoading }) => {
  const { subtotal, discountTotal, total } = useCartTotals(items);

  return (
    <div className="relative col-span-3">
      <h2 className="text-green-600 font-semibold text-xl mb-4">
        هل لديك كود خصم ؟
      </h2>
      <div className="flex mb-4 relative">
        <input
          type="text"
          placeholder="إضافة كوبون خصم"
          className="bg-[#f5f5f5] w-[650px] h-[65px] rounded-[8px] text-[14px] pr-[45px]"
        />
        <span className="absolute left-20 top-3 w-[0.5px] h-8 bg-[var(--main-color)]"></span>
        <button className="absolute left-2 top-4 px-4 text-[var(--main-color)] rounded-r-md">
          تطبيق
        </button>
      </div>

      <div className="space-y-8 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span className="text-[#828282]">تفاصيل السعر</span>
          <span className="text-[var(--main-color)] text-2xl font-bold">
            {subtotal.toFixed(2)} دج
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span className="text-[#828282]">الخصم</span>
          <span className="text-[var(--main-color)] font-semibold">
            {discountTotal.toFixed(2)} دج
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span className="text-[#828282]">المجموع</span>
          <span className="text-[var(--main-color)] font-semibold">
            {total.toFixed(2)} دج
          </span>
        </div>
        <div className="flex justify-between font-bold text-green-600 border-t pt-2">
          <span className="text-[#174086]">الإجمالي</span>
          <div className="flex items-center gap-2">
            {discountTotal > 0 && (
              <span className="text-sm text-[#9E9E9E] line-through">
                {subtotal.toFixed(2)} جنية
              </span>
            )}
            <span className="text-[var(--main-color)] font-semibold">
              {total.toFixed(2)} جنية
            </span>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-[#828282]">
        اكتب ملاحظة إلى مندوب التوصيل
      </p>
      <textarea
        placeholder="اكتب ملاحظة إلى مندوب التوصيل"
        className="bg-[#f5f5f5] w-[460px] h-[160px] mt-4 p-4 pr-[45px] rounded-[8px]"
      ></textarea>

      <button className="w-full mt-4 bg-[var(--main-color)] text-white py-3 rounded-md">
        تابع عملية الشراء
      </button>
      {isLoading && (
        <div className="absolute inset-0 bg-[#ffffff] bg-opacity-60 flex justify-center pt-24 z-50">
          <div className="w-7 h-7 border-2 border-[var(--main-color)] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default CartTotals;
