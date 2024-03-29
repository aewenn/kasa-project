/* Homepage banner */

import bannerkasa from '../assets/banner.png';

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerkasa} alt="photographie falaise" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;