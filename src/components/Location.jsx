import{useParams} from "react-router-dom";
import locations from "../data/logements.json"; // importation du fichier logements.json
import Slideshow from "../components/Slideshow";


const findLocations = (id) => {
    return locations.find((location) => location.id === id); // Permet de retourner l'id correspondant à l'id présent dans l'url
}


const Location = () => {

    const{id} = useParams(); // Récupération de l'id du logement
    const location = findLocations(id); // Pour gérer l'affichage des données du logement

    return (
        <section className="location-section">
                 <div className="pictures">
                    <Slideshow />
                <h1>{location.title}</h1>
            <p>{location.location}</p>
            </div>
        </section>
    );
};

export default Location;