import React from "react";
import { Navigate, useParams } from "react-router-dom";
import locations from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapsis from '../components/Collapsis';
import Tags from "./Tags";
import Rating from "./Rating";


// Fonction pour trouver un logement spécifique en fonction de l'ID
const findLocation = (id) => {
    return locations.find((location) => location.id === id);
}

const Location = () => {
    const { id } = useParams(); // Récupération de l'ID du logement à partir de l'URL
    const location = findLocation(id); // Recherche du logement correspondant à l'ID
    if (!location) {
        return <Navigate to="/error" />
    }

    // Structure des données pour les Collapsis
    const collapsisData = [
        { id: 1, title: "Description", text: location.description }, // Description avec le texte du logement
        { id: 2, title: "Équipements", text: location.equipments } // Équipements avec la liste des équipements du logement
    ];

    return (
        <section className="location-section">
            <Slideshow id={id} /> {/* Affichage du diaporama du logement */}
            <div className="location-info">
                <h1>{location.title}</h1> {/* Titre du logement */}
                <p>{location.location}</p> {/* Emplacement du logement */}
            </div>
            <Rating rating={location.rating} />
            <Tags tags={location.tags} />
                {/* Utilisation du composant Collapsis pour afficher la description et les équipements du logement */}
                <Collapsis data={collapsisData} />
        </section>
    );
};

export default Location;