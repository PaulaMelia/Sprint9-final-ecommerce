import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import ProductsComponent from "./ProductsComponent";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className=".products-card-container">
      <ProductsComponent/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;






