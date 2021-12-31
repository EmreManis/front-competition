import Image from "next/image";
import BasicDateRangePicker from "./checkInOut/DateRangePicker"; 

import LocationAutoComplete from "./otelFinder/LocationAutoComplete";

import classes from "./searchSection.module.css";

import calendarIcon from "../../../public/icons/calendar.svg";
import mapIcon from "../../../public/icons/map.svg";
import PersonNum from "./personNumbers/PersonNum";

const SearchArea = () => {
  return (
    <form className="flex">
      <div className={`flex border borderRadius ${classes.inpHeight}  ${classes.inpWidthOtel} mr-2.5 pl-6`}>
          <Image src={mapIcon} alt="tatil budur konaklama"/>
        <LocationAutoComplete />
      </div>
      <div className={`flex border borderRadius ${classes.inpHeight} ${classes.inpWidthTarih} mr-2.5 pl-6`}>
        <div className="w-1/4 flex items-center">
          <Image src={calendarIcon} alt="tatil konaklama tarihi" width={22} height={22}/>
        </div>
        <BasicDateRangePicker />
      </div>
      <div className={`flex border borderRadius ${classes.inpHeight} ${classes.inpWidthKisi} mr-2.5`}>
          <PersonNum />
      </div>
      <button className={`${classes.buttonArama} ${classes.inpHeight} whiteTone`}>Otel Ara</button>
    </form>
  );
};

export default SearchArea;
