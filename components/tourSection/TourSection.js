import TourSectionMenu from "./TourSectionMenu";
import TourAdv from "./TourAdv";

import classes from "./tourSection.module.css"

const TourSection = () => {
  return (
    <section className="flex flex-col items-center mt-16">
      <div className={`width1360 borderRadius26 ${classes.tourSection}`}>
        <TourSectionMenu />
        <TourAdv />
        <div></div>
      </div>
    </section>
  );
};

export default TourSection;
