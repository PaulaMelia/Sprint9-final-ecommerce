import PropTypes from "prop-types";
import { useContext } from "react";
import { dataContext } from "../DataContext";

const CartItemCounter = ({ product, quanty }) => {
  const { cart, setCart, buyProduct } = useContext(dataContext);

  const decrese = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat &&
      productRepeat.quanty !== 1 &&
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quanty: item.quanty - 1 } : item
        )
      );
  };

  return (
    <div className="cart-item-counter">
      <p className="counter-button" onClick={decrese}>
        -
      </p>
      <p>{quanty}</p>
      <p className="counter-button" onClick={() => buyProduct(product)}>
        +
      </p>
      </div>
  );
};
CartItemCounter.propTypes = {
  quanty: PropTypes.number.isRequired,
};

export default CartItemCounter;
