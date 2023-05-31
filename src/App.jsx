
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContent from "./components/CartContent";
import DataProvider from "./components/DataContext";
import ProductsPage from "./components/ProductsPage";




function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage/>}></Route>
          <Route path="/cart" element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
export default App;
