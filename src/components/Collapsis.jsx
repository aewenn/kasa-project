import arrow from "../assets/arrow.svg";

const Collapsis = () => {
    return (
        <section className="Collapsis-section">
            <div className="Collapsis">
            <h3>Fiabilité</h3>
            <img className="arrow" src={arrow} alt="flèche menu déroulant" />
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
        </section>
    );
};

export default Collapsis;