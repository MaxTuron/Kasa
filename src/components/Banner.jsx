import { Link } from "react-router-dom";

import '../styles/banner.css';

export default function Banner() {
    return (
      <div className="banner">
        <h1 className="title">Kasa</h1>
        <nav className="nav">
          <Link className="navRedirect" to="/">Accueil</Link>
          <Link className="navRedirect" to="/detail">A propos</Link>
        </nav>
      </div>
    );
  }