// @ts-nocheck
import Img from "../../asset/LOGO.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <img src={Img} alt="logo de Kasa" className="header_logo" />
      <ul className="header_nav">
        <Link to="/" className="navlink">
          Acceuil
        </Link>
        <Link to="/about" className="navlink">
          A propos
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
