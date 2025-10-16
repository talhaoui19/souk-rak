import {
  Hero,
  Categories,
  AllPhones,
  Testimonials,
  Newsletter,
  Products,
  NowProducts,
  NewProducts,
  Poromos,
} from "../index";
import LaptopsSection from "../Laptops/page";

const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <div className="container">
        <Categories />
        <Poromos />
        <Products />
      </div>
      <AllPhones />
      <div className="container">
        <NowProducts />
        <LaptopsSection />
        <NewProducts />
        <Testimonials />
      </div>
      <Newsletter />
    </section>
  );
};

export default HomePage;
