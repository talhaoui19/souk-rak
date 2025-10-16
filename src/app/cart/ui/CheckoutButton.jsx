import Link from "next/link";

const CheckoutButton = () => (
  <>
    <Link href={"/checkout"} className="--but w-full mt-4">
      تابع عملية الشراء
    </Link>
  </>
);

export default CheckoutButton;
