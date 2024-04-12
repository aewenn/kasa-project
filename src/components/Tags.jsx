import PropTypes from "prop-types";

const Tags = ({ tags }) => {
    return (
        <div className="location-tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tags;
