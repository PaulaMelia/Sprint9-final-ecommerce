import { useContext } from "react";
import { dataContext } from "../DataContext";
import'../../styles/CartContent.css';

const CartElements = () => {
  const { cart } = useContext(dataContext);
  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.image} alt="product-card" />
        <h3 className="name">{product.name}</h3>
        <h4 className="price">{product.price}$</h4>
        <p className="characteristics">{product.characteristics}</p>
      </div>
    );
  });
};

export default CartElements;
