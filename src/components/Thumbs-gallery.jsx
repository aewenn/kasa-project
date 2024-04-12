import React from "react";
import Thumb from "./Thumb";
import DataThumb from "../data/logements.json"; // Importation des données de logements

const ThumbsGallery = () => {
  return (
    // Section contenant la galerie
    <section className="Thumbs-gallery">
      {/* Mapping sur chaque logement dans les données de logements */}
      {DataThumb.map((location) => (
        // Affichage du composant Thumb pour chaque logement
        <Thumb key={location.id} location={location} />
      ))}
    </section>
  );
};

export default ThumbsGallery;
