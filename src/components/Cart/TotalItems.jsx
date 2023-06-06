import { useContext } from "react";
import { dataContext } from "../DataContext";

const TotalItems = () => {
  const { cart } = useContext(dataContext);

  const itemQuanty = cart.reduce((acc, element) => acc + element.quanty, 0);

  return <span className="cart-item-total">{itemQuanty}</span>;
};

export default TotalItems;
