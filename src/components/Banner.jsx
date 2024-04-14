/* Banner */

const Banner = ({ imageSrc, imageClass, title, alt }) => {
    return (
        <div className="banner" >
            <img src={imageSrc} alt={alt} className={imageClass} />
            {title && <h1>{title}</h1>}
        </div>
    );
};

export default Banner;