import { useContext, useState } from "react";
import { dataContext } from "../DataContext";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const [purchased, setPurchased] = useState(false);
  
  const deleteProduct = (id) =>{
   const foundId = cart.find((element)=> element.id ===id)

   const newCart = cart.filter((element)=> {
    return element !== foundId;
   });
   setCart(newCart)
  };
  const handlePurchase = () => {
    setPurchased(true);
  };

  return (
    <div className="cartContainer">
      <div className="cartHeader">Aquí tienes tu compra:</div>
      {purchased && <div className="purchasedMessage">¡Comprado!</div>}
      <div className="cartContentContainer">
        {cart.map((product) => (
          <div className="cartContent" key={product.id}>
            <img src={product.image} alt="product-card" />
            <div className="productInfo">
              <h3 className="name">{product.name}</h3>
              <h4 className="price">{product.price * product.quanty}$</h4>
              <p className="characteristics">{product.characteristics}</p>
              <CartItemCounter product={product} quanty={product.quanty} />
              <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>❌</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="purchaseButton" onClick={handlePurchase}>
        Comprar
      </button>
    </div>
  );
};

export default CartElements;
