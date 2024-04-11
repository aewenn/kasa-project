import Thumb from './Thumb';
import DataThumb from "../data/logements.json";

const Thumbsgallery = () => {
  return (
    <section className="Thumbs-gallery">
      <Thumb DataThumb={DataThumb} />
    </section>
  );
};

export default Thumbsgallery;