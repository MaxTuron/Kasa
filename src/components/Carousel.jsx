import React from "react";
import {useParams} from 'react-router-dom';
import Logements from "../data/logements.json"

export default function Carousel (objPicture) {
    const { logementId } = useParams();
    const logementUnique = Logements.find((logementUnique) => logementUnique.id === logementId)
    const {pictures} = logementUnique
return(
    <div>
        {console.log(pictures)}
        {pictures.map((picture,key) => {
                    return(
                        <div>
                            <img src={picture} alt="ImageLocation" key={key}></img>
                        </div>
                    )
                })}
    </div>
)
};
