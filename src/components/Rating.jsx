const Rating = ({ rating }) => {
    // On convertit la notation du logement en nombre d'étoiles pleines et vides
    const filledStars = parseInt(rating);
    const emptyStars = 5 - filledStars;

    return (
        <div className="rating-container">
            {/* On génère les étoiles pleines avec la classe "rating" */}
            {Array(filledStars).fill().map((_, index) => (
                <i className="fa-solid fa-star rating" key={`filled-${index}`}></i>
            ))}
            {/* On génère les étoiles vides avec la classe "score" */}
            {Array(emptyStars).fill().map((_, index) => (
                <i className="fa-solid fa-star score" key={`empty-${index}`}></i>
            ))}
        </div>
    );
};

export default Rating;