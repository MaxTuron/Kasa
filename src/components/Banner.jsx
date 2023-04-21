import { Link } from "react-router-dom";
import logoRed from "../assets/logoRed.png"
import '../styles/banner.css';
export default function Banner() {
  const URL = window.location.href
  const newUrl = URL.split(3000)
    return (
      <div className="banner">
        <img src={logoRed} alt="Logo rouge Kasa" className="logo"></img>
        <nav className="nav">
          <Link className={"navRedirect" + (newUrl[1] === "/" ? "Underline" : "None")} to="/">Accueil</Link>
          <Link className={"navRedirect" + (newUrl[1] === "/detail" ? "Underline" : "None")} to="/detail">A propos</Link>
        </nav>
      </div>
    );
  }