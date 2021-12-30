import TourSectionMenu from "./TourSectionMenu";
import TourAdv from "./TourAdv";
import Slide from "./Carousel";

import classes from "./tourSection.module.css"

const TourSection = () => {
  return (
    <section className="flex flex-col items-center mt-16">
      <div className={`w-1360 borderRadius26 ${classes.tourSection}`}>
        <TourSectionMenu />
        <TourAdv />
        <Slide />
      </div>
    </section>
  );
};

export default TourSection;
