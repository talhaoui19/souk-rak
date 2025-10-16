import { CategoriesBrands } from "@/src/constants";
import Header from "./ui/Header";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="pb-32">
      <Header />
      <div className="container grid grid-cols-4 gap-4">
        {CategoriesBrands.map((brand) => {
          return (
            <Link key={brand.id} href={brand.link}>
              <Image src={brand.image} quality={100} alt={brand.id} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
