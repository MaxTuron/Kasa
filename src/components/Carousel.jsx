import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import Logements from "../data/logements.json"
import {FaArrowAltCircleRight, FaArrowCircleLeft} from "react-icons/fa"
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
        <FaArrowCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {pictures.map((picture,index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={picture} alt="ImageLocation" className="image"></img>)}
                        </div>
                    )
                })}
    </section>
)
};
