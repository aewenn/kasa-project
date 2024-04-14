import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/arrow.svg";

const Collapsis = ({ data }) => {
    const [collapsedIndex, setCollapsedIndex] = useState(null); // Utilisation du hook useState pour gérer l'état de l'index actuellement collapsé

    const collapsisItems = []; // Tableau pour stocker les éléments du Collapsis

    // Boucle pour parcourir les données et créer les éléments correspondants
    for (let i = 0; i < data.length; i++) {
        const item = data[i]; // On récupère l'élément actuel dans les données
        const isCollapsed = i === collapsedIndex; // On détermine si l'élément est actuellement collapsé ou non

        // Création de chaque élément Collapsis avec les données correspondantes
        collapsisItems.push(
            <div key={item.id} className="Collapsis" onClick={() => setCollapsedIndex(isCollapsed ? null : i)}>
                <img src={arrow} alt="flèche menu déroulant" className={`arrow ${isCollapsed ? 'collapsed' : ''}`} />
                <h3>{item.title}</h3>
                {isCollapsed && <div className="Collapsis-content"><p>{item.text}</p></div>}
            </div>
        );
    }

    return (
        <div className="Collapsis-section">
            {collapsisItems}
        </div>
    );
};

Collapsis.propTypes = { 
    data: PropTypes.arrayOf( // Les données doivent être un tableau d'objets avec des propriétés spécifiques
        PropTypes.shape({
            id: PropTypes.number.isRequired, // L'ID doit être un nombre et est requis
            title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères et est requis
            text: PropTypes.oneOfType([ // Le texte peut être :
                PropTypes.string, // une chaîne de caractères 
                PropTypes.arrayOf(PropTypes.string) // ou un tableau de chaînes de caractères 
            ]).isRequired // et est requis
        })
    ).isRequired
};

export default Collapsis;