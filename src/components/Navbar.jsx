import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to="/">
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/aboutkasa">
                <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;