import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { dataContext } from "../components/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "./Cart/TotalItems";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div className="navbar-logo-container">
            <div className="navbar-logo">
              <FontAwesomeIcon icon={faBicycle} className="bicycle-icon" />
              <span>BIKE SHOP</span>
            </div>
          </div>
        </Link>

        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-cart">
          <Link
            className="navbar-link"
            to={"/cart"}
            style={{ textDecoration: "none", color: "black" }}
          >
            🛒
            {cart.length > 0 ? <TotalItems /> : null}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
