import PropTypes from "prop-types";

// Composant enfant Collapse
const Collapse = ({ isOpen, content }) => (
    <div className={`Collapsis-content ${isOpen ? 'slide-down' : 'slide-up'}`}>
        {Array.isArray(content) ? ( // On vérifie si le contenu est un tableau, et si c'est le cas...
            content.map((paragraph, index) => (
                <p key={index} className={isOpen ? 'slide-down-text' : 'slide-up-text'}>{paragraph}</p> // Paragraphe (contenu tableau) avec animation de slide
            ))
        ) : ( // Si le contenu n'est pas un tableau
            <p className={isOpen ? 'slide-down-text' : 'slide-up-text'}>{content}</p> // Paragraphe (contenu simple) avec animation de slide
        )}
    </div>
);

Collapse.propTypes = {
    isOpen: PropTypes.bool.isRequired, // L'état d'ouverture doit être un booléen et est requis
    content: PropTypes.oneOfType([ // Le contenu peut être :
        PropTypes.string, // une chaîne de caractères 
        PropTypes.arrayOf(PropTypes.string) // ou un tableau de chaînes de caractères 
    ]).isRequired // et est requis
};

export default Collapse;


