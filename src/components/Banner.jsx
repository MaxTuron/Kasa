import { Link } from "react-router-dom";
import logoRed from "../assets/logoRed.png"
import '../styles/banner.css';

export default function Banner() {
    return (
      <div className="banner">
        <img src={logoRed} alt="Logo rouge Kasa" className="logo"></img>
        <nav className="nav">
          <Link className="navRedirect" to="/">Accueil</Link>
          <Link className="navRedirect" to="/detail">A propos</Link>
        </nav>
      </div>
    );
  }