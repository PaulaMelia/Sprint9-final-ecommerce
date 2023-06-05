import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; /*validación para la prop children */



export const dataContext = createContext();


const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  
  const buyProduct = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quanty: item.quanty + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quanty: 1 }]);
    }

    setAddedToCart({ ...addedToCart, [product.id]: true });
  };

  return (
    <dataContext.Provider
      value={{ data, cart, setCart, buyProduct, addedToCart, setAddedToCart }}
    >
      {children}
    </dataContext.Provider>
  );
};

DataProvider.propTypes = {
  /*validación para la prop children  */ children: PropTypes.node.isRequired,
};

export default DataProvider;
