import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; /*validación para la prop children */



export const dataContext = createContext();


const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    <dataContext.Provider value={{ data, cart, setCart}}>{children}</dataContext.Provider>
  );
};

DataProvider.propTypes = {
  /*validación para la prop children  */ children: PropTypes.node.isRequired,
};

export default DataProvider;
