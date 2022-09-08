import Logements from "../data/logements.json"

export default function Locations() {
   
    return (
        <div>
            <h1>Les Logements</h1>
            {Logements.map((logement,key) => {
                return(
                    <p key={key}>{logement.title}</p>
                )
            })}
        </div>
    )
}