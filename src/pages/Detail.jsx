import Banner from "../components/Banner"
import Footer from "../components/Footer"
import imgPaysage from "../assets/infoPaysage.jpg"
import "../styles/Detail.css"
export default function Survey() {
    return (
    <body>
      <div>
        <Banner />
      </div>
      <main>
        <div className="infos">
          <img src={imgPaysage} alt="Baniere paysage" className="imgPaysage" ></img>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
    );
  }