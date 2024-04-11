/* Page d'accueil */

import Banner from "../components/Banner";
import BannerImg from "../assets/banner.png";
import Thumbsgallery from "../components/Thumbs-gallery";

const Home = () => {
  return (
    <div>
      <Banner imageSrc={BannerImg} alt="Photographie de falaises" title="Chez vous, partout et ailleurs" imageClass="img-home"/>
      <Thumbsgallery />
    </div>
  );
};

export default Home;