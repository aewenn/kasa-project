/* Homepage banner */

import bannerhome from '../assets/banner.png';

const Banner = () => {
    return (
        <div className="banner" >
            <img className="img-home" src={bannerhome} alt="photographie falaise" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;