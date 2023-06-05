import PropTypes from "prop-types";


const CartItemCounter = ({quanty}) => {
  return (
    <>
      <p className="counter-button">-</p>
      <p>{quanty}</p>
      <p className="counter-button">+</p>
    </>
  );
};
CartItemCounter.propTypes = {
    quanty: PropTypes.number.isRequired,
  };

export default CartItemCounter;
