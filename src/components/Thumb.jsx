import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({ location }) => {
    return (
        // Création d'un lien vers la page de détails de la location
        <Link to={`/location/${location.id}`} className="Thumb" key={location.id}>
            {/* Affichage de l'image de couverture de la location */}
            <img src={location.cover} alt={location.title} />
            {/* Affichage du titre de la location */}
            <h2>{location.title}</h2>
        </Link>
    );
};

Thumb.propTypes = {
    location: PropTypes.object.isRequired,
};

export default Thumb;
