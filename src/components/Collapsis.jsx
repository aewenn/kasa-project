import React, { useState } from "react";
import aboutData from "../data/about.json";
import arrow from "../assets/arrow.svg";

const Collapsis = () => {
    // Créer un état pour stocker l'état de chaque élément
    const [collapsedStates, setCollapsedStates] = useState(aboutData.map(() => true));

    // Fonction pour basculer l'état d'un élément spécifique
    const toggleCollapse = (index) => {
        setCollapsedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section className="Collapsis-section">
            {aboutData.map((item, index) => (
                <div key={item.id} className="Collapsis" onClick={() => toggleCollapse(index)}>
                    <img src={arrow} alt="flèche menu déroulant" className={`arrow ${collapsedStates[index] ? '' : 'collapsed'}`} />
                    <h3>{item.title}</h3>
                    {!collapsedStates[index] && (                     // Afficher le contenu si l'index correspondant est true dans collapsedStates 
                        <div className={`Collapsis-content ${collapsedStates[index] ? '' : 'open'}`}>
                            <p>{item.text}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Collapsis;



