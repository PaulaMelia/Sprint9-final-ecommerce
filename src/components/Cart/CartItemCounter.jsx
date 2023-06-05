import PropTypes from "prop-types";
import { useContext } from "react";
import { dataContext } from "../DataContext";


const CartItemCounter = ({ product, quanty}) => {
  const { buyProduct } = useContext(dataContext);
  return (
    <>
      <p className="counter-button">-</p>
      <p>{quanty}</p>
      <p className="counter-button" onClick={() => buyProduct(product)}>
        +
      </p>
    </>
  );
};
CartItemCounter.propTypes = {
    quanty: PropTypes.number.isRequired,
  };

export default CartItemCounter;
