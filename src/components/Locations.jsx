import { Link } from "react-router-dom"
import Logements from "../data/logements.json"
import "../styles/location.css"

export default function Locations() {
   
    return ( 
        <div className="location">
            <div className="displayLogement">
                {Logements.map((logement,key) => {
                    return(
                        <div className="cards" key={key}>                           
                            <Link to={`logement/${logement.id}`}>
                                <img src={logement.cover} alt="ImagePrésentation"></img>
                                <p>{logement.title}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}