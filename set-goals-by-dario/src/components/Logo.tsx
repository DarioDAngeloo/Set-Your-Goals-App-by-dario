import logo from "../../public/img/logo.png";
import "../stylesheets/Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Logo;
