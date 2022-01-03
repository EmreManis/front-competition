import SearchNav from "./SearchNav";
import SearchArea from "./SearchArea";

import classes from "./searchSection.module.css";

const SearchSection = () => {
  return (
    <section className="flex border md:border-0 justify-center mb-8 md:mb-0">
      <div className={`flex flex-col justify-center pl-2 md:pl-10 ${classes.sectionStyle} ${classes.sectionHeight} md:widthSearch md:border md:borderRadiusSection md:mt-10 mb-5`}>
        <SearchNav />
        <SearchArea />
      </div>
    </section>
  );
};

export default SearchSection;
