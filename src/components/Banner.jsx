import { Link } from "react-router-dom";

export default function Banner() {
    return (
      <div>
        <h1>Kasa</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Accueil</Link> |{" "}
          <Link to="/detail">A propos</Link>
        </nav>
      </div>
    );
  }