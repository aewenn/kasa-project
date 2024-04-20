import React from "react";
import { Navigate, useParams } from "react-router-dom";
import locations from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapsis from '../components/Collapsis';
import Tags from "./Tags";
import Rating from "./Rating";
import Host from "./Host";

const findLocation = (id) => {
    return locations.find((location) => location.id === id);
}

const Location = () => {
    const { id } = useParams();
    const location = findLocation(id);
    if (!location) {
        return <Navigate to="/error" />
    }

    const collapsisData = [
        { id: 1, title: "Description", text: location.description },
        { id: 2, title: "Équipements", text: location.equipments }
    ];

    return (
        <section className="location-section">
            <Slideshow id={id} />
            <div className="location-info">
                <h1>{location.title}</h1>
                <p>{location.location}</p>
            </div>
            <Tags tags={location.tags} />
            <div className="rating-host">
                <Rating rating={location.rating} />
                <Host name={location.host.name} picture={location.host.picture} />
            </div>
            <div className="collapsis-location">
                <Collapsis data={collapsisData} />
            </div>
        </section>
    );
};

export default Location;
