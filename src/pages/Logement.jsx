import {Link, useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"

export default function Logement ()  {
    const { logementId } = useParams();
    const logementUnique = Logements.find((logementUnique) => logementUnique.id === logementId)
    const {title} = logementUnique
    return (
    <div>
      <div>
        <Banner />
      </div>
      <section>
        <h1>{title}</h1>
        <Carousel />
        <Link to='/'>Retour sur la page d'accueil</Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

