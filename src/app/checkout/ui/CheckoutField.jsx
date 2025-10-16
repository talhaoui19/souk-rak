"use client";

const CheckoutField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  Icon,
  className,
}) => {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <label htmlFor={name} className="--label">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`--input ${className}`}
        />
        {Icon && <Icon className="absolute right-3 top-1/2 -translate-y-1/2" />}
      </div>
    </div>
  );
};

export default CheckoutField;
