/* Page à propos */

import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../assets/banner-aboutkasa.png"
import Collapsis from "../components/Collapsis";
import aboutData from "../data/about.json";

const AboutKasa = () => {
    return (
        <div>
            <Banner imageSrc={BannerImg} alt="Photographie de vallée" imageClass="img-about" />
            <div className="collapsis-about">
                <Collapsis data={aboutData} />
            </div>
        </div>
    );
};

export default AboutKasa;
