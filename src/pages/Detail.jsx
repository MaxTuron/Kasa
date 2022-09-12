import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Info from "../components/Info"
import imgPaysage from "../assets/bandeauDetail.jpg"
import "../styles/detail.css"
export default function Survey() {
    return (
    <div>
      <div>
        <Banner />
      </div>
      <main>
        <div className="infos">
          <img src={imgPaysage} alt="Baniere paysage" className="bandeauDetail" ></img>
          <Info />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}