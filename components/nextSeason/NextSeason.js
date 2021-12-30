import Card from "./Card";
import NextSeasonMenu from "./NextSeasonMenu";

import classes from "./nextSeason.module.css";

const NextSeason = () => {
  return (
    <section className="flex flex-col items-center mt-16">
      <div className={`w-1360 borderRadius26 ${classes.nextSeason}`}>
        <NextSeasonMenu />
        <Card />
      </div>
    </section>
  );
};

export default NextSeason;
