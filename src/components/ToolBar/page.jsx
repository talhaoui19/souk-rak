const ToolBar = ({ title ,total }) => {
  return (
    <section className="container flex items-center justify-between mt-6">
      <h2 className="text-xl text-green-600 font-bold">
        {title} ({total})
      </h2>
      <div className="flex items-center gap-2">
        <span className="text-[#959EAD]">ترتيب حسب : </span>
        <select
          name=""
          id=""
          className="bg-[#f3f4f6] w-[200px] h-[50px] rounded-[8px] pr-6"
        >
          <option value="@">الأعلى تقييما</option>
          <option value="@">الأعلى تقييما</option>
          <option value="@">الأعلى تقييما</option>
          <option value="@">الأعلى تقييما</option>
        </select>
      </div>
    </section>
  );
};

export default ToolBar;
