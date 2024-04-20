import PropTypes from "prop-types";

const Host = ({ name, picture }) => {
    return (
        <div className="Host">
            <p className="host-name">{name}</p>
            <img src={picture} alt={name} className="host-picture" />

        </div>
    );
};

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};

export default Host;