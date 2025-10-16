import CheckoutButton from "./CheckoutButton";
import CouponForm from "./CouponForm";
import DeliveryNote from "./DeliveryNote";
import LoadingOverlay from "./LoadingOverlay";
import PriceDetails from "./PriceDetails";

const CartTotals = ({ items, isLoading }) => {
  return (
    <div className="relative col-span-3">
      <CouponForm />
      <PriceDetails items={items} />
      <DeliveryNote />
      <CheckoutButton />
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default CartTotals;
