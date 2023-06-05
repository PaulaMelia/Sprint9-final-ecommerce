const CartItemCounter = ({quanty}) => {
  return (
    <>
      <p className="counter-button">-</p>
      <p>{quanty}</p>
      <p className="counter-button">+</p>
    </>
  );
};

export default CartItemCounter;
