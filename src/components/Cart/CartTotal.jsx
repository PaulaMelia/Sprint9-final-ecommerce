/*Compra total del usuario */
import { useContext } from "react";
import { dataContext } from "../DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, element) => acc + element.price, 0);
  
  return (
    <div className="cartTotal">
      <h3>Total compra: {total} $</h3>
    </div>
  );
};

export default CartTotal;
