import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/arrow.svg";

const Collapsis = ({ data }) => {
    const [isOpen, setIsOpen] = useState(Array(data.length).fill(false)); // Utilisation du hook useState pour gérer l'état d'ouverture de chaque élément

    // Fonction pour basculer l'état d'ouverture d'un élément
    const toggleOpen = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const collapsisItems = []; // Tableau pour stocker les éléments du Collapsis

    // Boucle pour parcourir les données et créer les éléments correspondants
    for (let i = 0; i < data.length; i++) {
        const item = data[i]; // On récupère l'élément actuel dans les données

        // Création de chaque élément Collapsis avec les données correspondantes
        collapsisItems.push(
            <div key={item.id} className="Collapsis">
                <div className="Collapsis-header" onClick={() => toggleOpen(i)}>
                    <img src={arrow} alt="flèche menu déroulant" className={`arrow ${isOpen[i] ? 'collapsed' : ''}`} />
                    <h3>{item.title}</h3>
                </div>
                <div className={`Collapsis-content ${isOpen[i] ? 'slide-down' : 'slide-up'}`}>
                    {Array.isArray(item.text) ? (
                        // Si item.text est un tableau, on map chaque paragraphe pour l'afficher
                        item.text.map((paragraph, index) => (
                            <p key={index} className={isOpen[i] ? 'slide-down-text' : 'slide-up-text'}>{paragraph}</p>
                        ))
                    ) : (
                        // Sinon, on affiche le texte directement
                        <p className={isOpen[i] ? 'slide-down-text' : 'slide-up-text'}>{item.text}</p>
                    )}
                </div>
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