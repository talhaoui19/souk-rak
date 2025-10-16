"use client";
import CheckoutField from "./CheckoutField";

const CheckoutAddressFields = ({ form, handleChange }) => {
  return (
    <div className="flex items-center gap-2 mt-[40px]">
      <CheckoutField
        label="الولاية"
        name="state"
        value={form.state}
        onChange={handleChange}
        className="w-[220px] h-[60px]"
      />
      <CheckoutField
        label="البلدية"
        name="city"
        value={form.city}
        onChange={handleChange}
        className="w-[221px] h-[60px]"
      />
    </div>
  );
};

export default CheckoutAddressFields;
