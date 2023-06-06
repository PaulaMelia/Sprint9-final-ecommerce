import Home from "../components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContent from "../components/Cart/CartContent";
import DataProvider from "../components/DataContext";
import ProductsPage from "../components/ProductsPage";
import Contact from "../components/Contact";
/*import PrivateRoute from "./PrivateRoute";*/

function RoutesConfig() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default RoutesConfig;
