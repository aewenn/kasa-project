import React, { useState } from "react"; 
import PropTypes from "prop-types"; 
import arrow from "../assets/arrow.svg"; 


const Collapsis = ({ data }) => {
    // État pour gérer l'affichage des éléments (développé ou réduit)
    const [collapsedStates, setCollapsedStates] = useState(data.map(() => true));

    // Fonction pour changer l'état d'un élément lorsqu'il est cliqué
    const toggleCollapse = (index) => {
        setCollapsedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index]; // Inverse l'état de l'élément
            return newStates; // Retourne le nouvel état mis à jour
        });
    };

    return (
        <div className="Collapsis-section">
            {data.map((item, index) => (
                < div key = { item.id } className = "Collapsis" onClick = {() => toggleCollapse(index)}> 
            <img src={arrow} alt="flèche menu déroulant" className={`arrow ${collapsedStates[index] ? '' : 'collapsed'}`} />
            <h3>{item.title}</h3> 
            {!collapsedStates[index] && (
                <div className={`Collapsis-content ${collapsedStates[index] ? '' : 'open'}`}> 
                    <p>{item.text}</p> 
                </div>
            )}
        </div>
    ))
}
        </div >
    );
};

Collapsis.propTypes = {
    data: PropTypes.arrayOf( // data doit être un tableau d'objets avec une structure spécifique
        PropTypes.shape({
            id: PropTypes.number.isRequired, // id doit être un nombre et est requis
            title: PropTypes.string.isRequired, // title doit être une chaîne de caractères et est requis
            text: PropTypes.string.isRequired // text doit être une chaîne de caractères et est requis
        })
    ).isRequired // data est requis
};

export default Collapsis;