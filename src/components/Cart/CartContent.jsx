import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../DataContext";
import "../../styles/CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  /*Condition cart 0*/
  return cart.length > 0 ? (
    <>
      <CartTotal />
      <CartElements />
    </>
  ) : (
    <h2 className="cart-message-center">Tu carito esta vacio</h2>
  );
};

export default CartContent;
