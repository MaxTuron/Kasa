import { Link } from "react-router-dom"
import Logements from "../data/logements.json"
import "../styles/location.css"

export default function Locations() {
   
    return ( 
        <div>
            <h1>Les Logements</h1>
            <div className="displayLogement">
                {Logements.map((logement,key) => {
                    return(
                        <div key={key}>
                            <h5 className="logement">{logement.title}</h5>
                            <img src={logement.cover} alt="ImagePrésentation"></img>
                            <Link to={`logement/${logement.id}`}>Plus d'info</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}