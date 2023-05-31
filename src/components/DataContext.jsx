import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; /*validación para la prop children  */
//import axios from "axios"; /*para hacer peticiones http, como fetch*/


export const dataContext = createContext();


const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
};

DataProvider.propTypes = {
  /*validación para la prop children  */ children: PropTypes.node.isRequired,
};

export default DataProvider;
