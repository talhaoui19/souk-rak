const CouponForm = () => {
  return (
    <>
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
    </>
  );
};

export default CouponForm;
