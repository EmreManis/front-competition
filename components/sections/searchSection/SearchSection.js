import SearchNav from "./SearchNav";
import SearchArea from "./SearchArea";

import classes from "./searchSection.module.css";

const SearchSection = () => {
  return (
    <section className="flex justify-center">
      <div className={`flex flex-col justify-center pl-10 ${classes.sectionStyle} widthSearch border borderRadiusSection mt-10 mb-5`}>
        <SearchNav />
        <SearchArea />
      </div>
    </section>
  );
};

export default SearchSection;
