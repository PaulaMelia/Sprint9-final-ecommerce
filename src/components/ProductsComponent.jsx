import { useContext } from "react";
import { dataContext } from "./DataContext";
import "../styles/Products.css";

const ProductsComponent = () => {
  const { data } = useContext(dataContext);
  console.log(data);

  return (
    <div className="products-card-container"> 
      {data.length>0 && data.map((product) => (
        <div className="product-card" key={product.id}> 
          <img src={product.image} alt="img-product-card" className="product-image" /> 
          <h3 className="product-title">{product.name}</h3> 
          <h4 className="product-price">{product.price}$</h4> 
          <p className="product-characteristics">{product.characteristics}</p>
          <button className="button">Buy</button> 
        </div>
      ))}
    </div>
  );
};


export default ProductsComponent;
