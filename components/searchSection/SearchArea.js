import Image from "next/image";
import BasicDateRangePicker from "./DateRangePicker"; 

import LocationAutoComplete from "./LocationAutoComplete";

import classes from "./searchSection.module.css";

import bedIcon from "../../public/icons/bed.svg";
import arrowDownIcon from "../../public/icons/arrowDown.svg";
import calendarIcon from "../../public/icons/calendar.svg";
import mapIcon from "../../public/icons/map.svg";

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
      <div className={`flex border borderRadius ${classes.inpHeight} ${classes.inpWidthKisi} mr-2.5 pl-6`}>
          <Image src={bedIcon} alt="tatil kisi"/>
        <button className="w-full cyanTone pl-1.5 flex justify-start items-center" type="text"><span className="mr-16 poppinsRegular cyanTone">Kişi Sayısı</span><Image src={arrowDownIcon} alt="kisi sayisi"/></button>
      </div>
      <button className={`${classes.buttonArama} ${classes.inpHeight} whiteTone`}>Otel Ara</button>
    </form>
  );
};

export default SearchArea;
