const ProductPrice = ({ price, discount }) => {
  const finalPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;
  return (
    <div className="flex items-center justify-between mt-6">
      <div>
        <h2 className="text-[#174086] font-semibold">السعر:</h2>
        <span className="text-xs text-[#9E9E9E]">السعر شامل الضريبه</span>
      </div>
      <div>
        <span
          className={`text-[var(--main-color)] text-[30px] font-bold ml-2 ${
            discount ? "line-through" : ""
          }`}
        >
          {price}.00 دج
        </span>
        {discount && <span className="text-[#CACACA]">{finalPrice} دج</span>}
      </div>
    </div>
  );
};

export default ProductPrice;
