import { AddCountIcon, RemoveCountIcon } from "@/src/components/icons";

const ProductQuantity = ({ count, setCount, max }) => {
  return (
    <div className="flex items-center justify-between mt-32">
      <h2 className="text-[#174086] font-semibold">الكمية:</h2>
      <div className="flex items-center justify-between w-[238px] h-[50px] px-4 border border-[#DCDCDC] rounded-[4px]">
        <div
          className="cursor-pointer p-3"
          onClick={() => count < max && setCount(count + 1)}
        >
          <AddCountIcon />
        </div>
        <span className="block bg-[#DCDCDC] w-[1px] h-[30px]" />
        <span className="text-[var(--main-color)] text-lg font-semibold">
          {count < 10 ? `0${count}` : count}
        </span>
        <span className="block bg-[#DCDCDC] w-[1px] h-[30px]" />
        <div
          className="cursor-pointer p-3"
          onClick={() => count > 1 && setCount(count - 1)}
        >
          <RemoveCountIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
