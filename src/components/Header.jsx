import kasalogo from '../assets/logo-kasa.svg';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <img src={kasalogo} alt="logo" />
            <Navbar />
        </header>
    );
};

export default Header;