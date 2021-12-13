import Image from "next/image";
import SearchMenuButtons from "./SearchMenuButtons";
import SearchArea from "./SearchArea";

import classes from "./SearchSection.module.css";

const SearchSection = () => {
  return (
    <section className="flex justify-center">
      <div className={`flex flex-col justify-center pl-10 ${classes.sectionStyle} ${classes.border} ${classes.borderRadiusSection} mt-10 mb-5`}>
        <SearchMenuButtons />
        <SearchArea />
      </div>
    </section>
  );
};

export default SearchSection;
