import TourSectionMenu from "./TourSectionMenu";
import TourAdv from "./TourAdv";
import Slide from "./Carousel";

import classes from "./tourSection.module.css"

const TourSection = () => {
  return (
    <section className="md:flex flex-col items-center md:mt-16">
      <div className={`xl:w-1360 md:borderRadius26 ${classes.tourSection}`}>
        <TourSectionMenu />
        <TourAdv />
        <Slide />
      </div>
    </section>
  );
};

export default TourSection;
