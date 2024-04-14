const Rating = ({ rating }) => {
    console.log(rating);
    return (
        <div>
            {Array.from(Array(parseInt(rating))).map((_, index) => (
                <span key={index}>test</span>
            ))}
            {Array.from(Array(5 - parseInt(rating))).map((_, index) => (
                <span key={index + parseInt(rating)}>4</span>
            ))}
        </div>
    );
};

export default Rating;


