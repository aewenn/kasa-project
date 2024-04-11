import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-underline" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "link-underline" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;