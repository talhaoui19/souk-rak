import CartProductCard from "./CartProductCard";
import LoadingOverlay from "./LoadingOverlay";

const CartProducts = ({
  items,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleDeleteItem,
  isLoading,
}) => {
  return (
    <div className="relative col-span-5">
      {items.map((item) => (
        <CartProductCard
          key={item._id}
          item={item}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default CartProducts;
