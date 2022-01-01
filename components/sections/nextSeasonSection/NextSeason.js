import Card from "./Card";
import NextSeasonNav from "./NextSeasonNav";

import classes from "./nextSeasonSection.module.css";

const NextSeason = () => {
  return (
    <section className="md:flex flex-col items-center mt-16">
      <div className={`xl:w-1360 borderRadius26 ${classes.nextSeason}`}>
        <NextSeasonNav />
        <Card />
      </div>
    </section>
  );
};

export default NextSeason;
