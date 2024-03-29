import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error">
            <h3>404</h3>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/home">
                <p className="link">Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    );
};

export default ErrorPage;