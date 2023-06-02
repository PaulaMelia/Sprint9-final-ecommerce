import { useContext, useState } from "react";
import { dataContext } from "./DataContext";
import "../styles/Products.css";

const ProductsComponent = () => {
  const { data, cart, setCart } = useContext(dataContext);
  const [addedToCart, setAddedToCart] = useState({});

  const buyProducts = (product) => {
    setCart([...cart, product]);
    setAddedToCart({ [product.id]: true });
  };

  return (
    <div className="products-card-container">
      {data.length > 0 &&
        data.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt="img-product-card"
              className="product-image"
            />
            <h3 className="product-title">{product.name}</h3>
            <h4 className="product-price">{product.price}$</h4>
            <p className="product-characteristics">{product.characteristics}</p>
            <button
              onClick={() => buyProducts(product)}
              className="button-primary"
            >
              Buy
            </button>
            {addedToCart[product.id] && (
              <div className="addedToCartMessage">Producto añadido a la cesta</div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ProductsComponent;
