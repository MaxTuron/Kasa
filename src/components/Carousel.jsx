import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import arrowLeft from "../assets/arrow-left-solid.svg"
import arrowRight from "../assets/arrow-right-solid.svg"
import "../styles/carousel.css"

export default function Carousel () {
    const { logementId } = useParams();
    const logementUnique = Logements.find((logementUnique) => logementUnique.id === logementId);

    const {pictures} = logementUnique;

    const [current, setCurrent] = useState(0);
    const length = pictures.length

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(pictures) || pictures.length <= 0){
        return null;
    }

return(
    <section className="slider">
        <img src={arrowLeft} alt="ArrowLeft" className={length === 1 ? "noDisplay" : "left-arrow"} onClick={prevSlide}/>
        {pictures.map((picture,key) => {
                    return(
                        <div className={key === current ? 'slide activeImage' : 'slide'} key={key}>
                            {key === current && (<img src={picture} alt="ImageLocation" className="image"></img>)}
                            {key === current && (<p className="compteur">{key+1}/{length}</p>)}
                        </div>
                    )
                })}
        <img src={arrowRight} alt="ArrowRight" className={length === 1 ? "noDisplay" : "right-arrow"} onClick={nextSlide}/>
    </section>
)
};
