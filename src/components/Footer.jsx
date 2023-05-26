import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-info">
          &copy;2023 Bike Shop | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
