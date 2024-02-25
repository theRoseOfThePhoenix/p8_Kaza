// @ts-nocheck
import Img from "../../asset/LOGO.png";

function Header() {
  return (
    <nav className="header">
      <img src={Img} alt="logo kasa" className="logo" />
      <ul className="nav">
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </nav>
  );
}

export default Header;
