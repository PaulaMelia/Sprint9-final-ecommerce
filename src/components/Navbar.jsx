import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

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
            <a href="/offers">Bike Routes</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-cart">
          <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
          <span>Shopping Cart</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
