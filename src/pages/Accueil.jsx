import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Location from "../components/Locations"
import imgBandeau from "../assets/bandeauIndex.jpg"

export default function App() {
  return (
    <div>
      <div>
        <Banner />
        <img src={imgBandeau} alt="Bandeau Index" className="bandeauDetail"></img>
        <Location />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}