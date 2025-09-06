import logo from "../assets/icons/white-logo.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" className="logo-footer" />
        <span className="footer-span-logo">EasyVeg</span>
      </div>
    </div>
  );
};
