import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({ DataThumb }) => {
    return (
        DataThumb.map((location) => (
            <Link to={`/location/${location.id}`} className="Thumb" key={location.id}>
                <img src={location.cover} alt={location.title} />
                <h2>{location.title}</h2>
            </Link>
        ))
    );

};

Thumb.propTypes = {
    DataThumb: PropTypes.array.isRequired
}

export default Thumb;