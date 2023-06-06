import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import TotalItems from "./Cart/TotalItems";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-logo-container">
          <div className="navbar-logo">
            <FontAwesomeIcon icon={faBicycle} className="bicycle-icon" />
            <span>BIKE SHOP</span>
          </div>
        </div>

        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-cart">
          <Link className="navbar-link" to={"/cart"}>
            🛒
          <TotalItems/>
          </Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
