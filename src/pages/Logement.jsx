import {Link, useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"

export default function Logement ()  {
    const { logementId } = useParams();
    const logementUnique = Logements.find((logementUnique) => logementUnique.id === logementId)
    const {title, description, host, rating, location, equipments, tags} = logementUnique

    console.log(equipments)
    console.log(tags)
    return (
    <div>
      <div>
        <Banner />
      </div>
      <section>
        <Carousel />


        <h1>{title}</h1>
        <p>{description}</p>
        <p>{host.name}</p>
        <img src={host.picture} alt="photoProfil"></img>
        <p>{rating}</p>
        <p>{location}</p>

        {equipments.map((equipement,key) => {
            return(
              <div>
                <p key={key}>{equipement}</p>
              </div>
            )
        })}

        {tags.map((tag,key) => {
            return(
              <div>
                <p key={key}>{tag}</p>
              </div>
            )
        })}


        <Link to='/'>Retour sur la page d'accueil</Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

