import {Link, useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

export default function Logement ()  {
    const { logementId } = useParams();
    const logementUnique = Logements.find((logementUnique) => logementUnique.id === logementId)
    const {title} = logementUnique
    return (
    <body>
      <div>
        <Banner />
      </div>
      <section>
        <h1>{title}</h1>
        <Link to='/'>Retour sur la page d'accueil</Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}