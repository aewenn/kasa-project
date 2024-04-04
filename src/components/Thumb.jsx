import PropTypes from "prop-types";

const Thumb = ({DataThumb}) => {
    return (
        DataThumb.map((card) => (
        <div className="Thumb" key={card.id}>
            <img src={card.cover} alt={card.title} />
            <h2>{card.title}</h2>
        </div>
        ))
    );

};

    Thumb.propTypes ={
        DataThumb:PropTypes.array.isRequired
    }

export default Thumb;