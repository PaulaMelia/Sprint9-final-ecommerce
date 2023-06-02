import { useContext } from "react";
import { dataContext } from "./DataContext";
import "../styles/Products.css";

const ProductsComponent = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    setCart([...cart, product]); /*copia de mi carrito y agrega product nuevo*/
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
            <button onClick={() => buyProducts(product)}>Buy</button>
          </div>
        ))}
    </div>
  );
};

export default ProductsComponent;
