import { useState } from "react";

import SearchNav from "./SearchNav";
import SearchArea from "./SearchArea";

import classes from "./searchSection.module.css";

const SearchSection = () => {
  const [isActive, setIsActive] = useState(0);

  const activeHandler = (id) => {
    setIsActive(id);
  }
  return (
    <section className="flex border md:border-0 justify-center mb-8 md:mb-0">
      <div className={`flex flex-col justify-center pl-2 md:pl-10 ${classes.sectionStyle} ${classes.sectionHeight} md:widthSearch md:border md:borderRadiusSection md:mt-10 mb-5`}>
        <SearchNav isActive={isActive} activeHandler={activeHandler}/>
        <SearchArea isActive={isActive}/>
      </div>
    </section>
  );
};

export default SearchSection;
