/* About Kasa */

import Banner from "../components/Banner";
import BannerImg from "../assets/banner-aboutkasa.png"
import Collapsis from "../components/Collapsis";

const AboutKasa = () => {
    return (
        <div>
            <Banner imageSrc={BannerImg} alt="Photographie de vallée" imageClass="img-about" />
            <Collapsis />
        </div>
    );
};

export default AboutKasa;