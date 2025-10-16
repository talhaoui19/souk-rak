import { useCartTotals } from "../hooks/useCartTotals";

const PriceDetails = ({ items }) => {
  const { subtotal, discountTotal, total } = useCartTotals(items);
  return (
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
              {subtotal.toFixed(2)} دج
            </span>
          )}
          <span className="text-[var(--main-color)] font-semibold">
            {total.toFixed(2)} دج
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
