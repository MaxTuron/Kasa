import {Link, useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import Error from "../pages/Error"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import star from "../assets/star-solid.svg"
import emptyStar from "../assets/star-regular.svg"
import "../styles/logement.css"

export default function Logement ()  {
    const { logementId } = useParams();
    const logementUnique = Logements.find((logementUnique) => logementUnique.id === logementId)
  

    if(!logementUnique){
      return <Error />
    }
    
    const {title, description, host, rating, location, equipments, tags} = logementUnique
    const etoiles = [1, 2, 3, 4, 5]
    return (
    <div>
      <div>
        <Banner />
      </div>
      <section>
        <Carousel />

        <div className='premiereLigne'>
          <h1 className='title'>{title}</h1>
          <div className='infoProprio'>
            <p className='name'>{host.name}</p>
            <img src={host.picture} alt="photoProfil"></img>
          </div>
        </div>
        
        <h2 className='location'>{location}</h2>

        <div className='deuxiemeLigne'>
          <div className='tags' >
            {tags.map((tag,index) => {
                return(
                    <p className='tag' key={index}>{tag}</p>
                )
            })}
          </div>
          <div className='stars'>
          {etoiles.map((nbEtoiles) =>
                rating >= nbEtoiles ? <img src={star} alt='Etoile' className='star'/> : <img src={emptyStar} className='star' alt='EtoileVide' />
            )}
          </div>
        </div>
        
        <div className='troisiemeLigne'>
          <div className='descriptionMenu'>
            <h1 className='descriptionTitle'>Description</h1>
            <p className='description'>{description}</p>
          </div>

          <div className='equipmentMenu'>
            <h1 className='equipmentTitle'>Equipements</h1>
            <div className='equipment'>
              {equipments.map((equipement,index) => {
                  return(
                    <div key={index}>
                      <p>{equipement}</p>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
       
        <Link to='/'>Retour sur la page d'accueil</Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

