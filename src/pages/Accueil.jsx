import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Location from "../components/Locations"
import imgBandeau from "../assets/bandeauIndex.jpg"
import "../styles/accueil.css"

export default function Accueil() {
  return (
    <div className="Accueil">
        <Banner />
        <div className="bandeauAccueil">
          <img src={imgBandeau} alt="Bandeau Index" className="bandeauAccueil"></img>
          <p className="texteBandeau">Chez vous, partout et ailleur</p>
        </div>
        <Location />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}