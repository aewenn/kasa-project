/* Page About banner */

import Bannerabout from '../assets/banner-aboutkasa.png';

const Banner = () => {
    return (
        <div className="banner" >
            <img className="img-about" src={Bannerabout} alt="photographie vallée" />
        </div>
    );
};

export default Banner;