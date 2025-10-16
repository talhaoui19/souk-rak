import { useMemo } from "react";

export function useCartTotals(items) {
  return useMemo(() => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );

    const discountTotal = items.reduce((acc, item) => {
      if (item.productId.discount && item.productId.discount > 0) {
        const itemDiscount =
          (item.productId.price * item.quantity * item.productId.discount) /
          100;
        return acc + itemDiscount;
      }
      return acc;
    }, 0);

    const total = subtotal - discountTotal;

    return { subtotal, discountTotal, total };
  }, [items]);
}
