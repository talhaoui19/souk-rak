import {
  Hero,
  Categories,
  AllPhones,
  Testimonials,
  Newsletter,
  Products,
  NowProducts,
  NewProducts,
} from "../index";

const HomePage = () => {
  return (
    // START HOME PAGE
    <section id="home">
      <div className="container">
        <Hero />
        <Categories />
        <Products />
      </div>
      <AllPhones />
      <div className="container">
        <NowProducts />
        <NewProducts />
        <Testimonials />
      </div>
      <Newsletter />
    </section>
    // END HOME PAGE
  );
};

export default HomePage;
