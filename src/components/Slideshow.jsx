import React, { useState } from "react";
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import locations from "../data/logements.json";


// Fonction pour trouver les informations de localisation à partir de l'ID
function findLocation(id) {
    return locations.find((location) => location.id === id);
}

// Diaporama

function Slideshow({ id }) {

    // État pour la localisation et l'index de l'image actuellement affichée
    const [location] = useState(() => findLocation(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // On vérifie s'il y a plus d'une image dans le carrousel
    const hasMultipleImages = location && location.pictures.length > 1;

    // Fonction pour passer à l'image suivante
    function goToNextImage() {
        // Calcule l'index de l'image suivante
        let nextIndex = currentImageIndex + 1;
        // Si l'index dépasse la dernière image, revenir à l'index 0
        if (nextIndex >= location.pictures.length) {
            nextIndex = 0;
        }
        setCurrentImageIndex(nextIndex);
    }

    // Fonction pour passer à l'image précédente
    function goToPreviousImage() {
        // Calcule l'index de l'image précédente
        let previousIndex = currentImageIndex - 1;
        // Si l'index est inférieur à zéro, revenir à l'index de la dernière image
        if (previousIndex < 0) {
            previousIndex = location.pictures.length - 1;
        }
        setCurrentImageIndex(previousIndex);
    }

    return (
        <div className="pictures">
            <img src={location && location.pictures[currentImageIndex]} alt={location && location.title} /> {/* On affiche l'image actuelle */}
            {hasMultipleImages && (
                <>  {/* On utilise la variable hasMultipleImages pour conditionner l'affichage des flèches */}
                    <img className="arrowleft" src={arrowleft} alt="Flèche gauche" onClick={goToNextImage} />
                    <img className="arrowright" src={arrowright} alt="Flèche droite" onClick={goToPreviousImage} />
                    <div className="slide-info">
                        {currentImageIndex + 1} / {location.pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slideshow;
