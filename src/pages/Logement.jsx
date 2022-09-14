import {Link, useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import "../styles/logement.css"
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


        <h1 className='title'>{title}</h1>
        <h2 className='title'>{location}</h2>

        <div className='tags' >
        {tags.map((tag,index) => {
            return(
                <p className='tag' key={index}>{tag}</p>
            )
        })}
</div>
        <p>{description}</p>
        <p>{host.name}</p>
        <img src={host.picture} alt="photoProfil"></img>
        <p>{rating}</p>
        

        {equipments.map((equipement,index) => {
            return(
              <div key={index}>
                <p>{equipement}</p>
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

