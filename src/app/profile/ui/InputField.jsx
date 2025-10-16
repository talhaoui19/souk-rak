"use client";

const InputField = ({
  id,
  type = "text",
  value,
  placeholder = "",
  onChange,
  icon: Icon,
  readOnly = false,
  error = false,
  note = "",
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-[320px] h-[55px] rounded-[8px] pr-[55px] 
          focus:outline-none focus:ring-1 focus:ring-[var(--main-color)] 
          ${readOnly ? "bg-[#EBEBEB]" : "bg-[rgb(247_247_247)]"} 
          ${error ? "border-[1px] border-red-500" : ""}`}
      />
      {Icon && <Icon />}
      {note && (
        <span className="absolute bottom-1 left-1 text-xs text-[#174086]">
          {note}
        </span>
      )}
    </div>
  );
};

export default InputField;
