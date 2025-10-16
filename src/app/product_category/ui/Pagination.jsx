import { ArrowLeftIcon } from "@/src/components/icons";

const Pagination = () => {
  return (
    <section className="flex justify-center my-10">
      <ul className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <li
            key={n}
            className={`w-[45px] h-[45px] flex items-center justify-center rounded-[8px] cursor-pointer ${
              n === 1
                ? "bg-[#D0FEE0] text-[var(--main-color)]"
                : "bg-white text-[#959EAD]"
            }`}
          >
            {n}
          </li>
        ))}
        <li className="w-[45px] h-[45px] flex items-center justify-center rounded-[8px] cursor-pointer bg-[var(--main-color)] text-white">
          <ArrowLeftIcon color={"#ffff"} />
        </li>
      </ul>
    </section>
  );
};

export default Pagination;
