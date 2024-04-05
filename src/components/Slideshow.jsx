import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import{useParams} from "react-router-dom";
import locations from "../data/logements.json";


const findLocations = (id) => {
    return locations.find((location) => location.id === id); // Permet de retourner l'id correspondant à l'id présent dans l'url
}

const Slideshow = () => {
    const { id } = useParams(); // Récupération de l'id du logement
    const location = findLocations(id); // Pour gérer l'affichage des données du logement
    const pictures = location.pictures; // Récupération du tableau des photos du logement
    return (
         <div className="pictures">
                {pictures.map((picture, index) => {
                    return (
                        <img src={picture} alt={picture.title} key={(picture, index)} /> // Permet de retourner les photos du logement par rapport à l'index
                    )
                })}
            <img src={arrowleft} alt="Flèche gauche" />
            <img src={arrowright} alt="Flèche droite" />
            </div>
    );
};

export default Slideshow;