import Image from "next/image";

import classes from "./SearchSection.module.css";

import bedIcon from "../../public/icons/bed.svg";
import arrowDownIcon from "../../public/icons/arrowDown.svg";
import calendarIcon from "../../public/icons/calendar.svg";
import mapIcon from "../../public/icons/map.svg";

const SearchArea = () => {
  return (
    <form className="flex">
      <div className={`flex ${classes.border} ${classes.borderRadius} ${classes.inpHeight}  ${classes.inpWidthOtel} mr-2.5 pl-6`}>
          <Image src={mapIcon} alt="tatil budur konaklama"/>
        <input className="w-full cyanTone pl-4" type="text" value="Otel, Şehir, Bölge veya Tema Adı" />
      </div>
      <div className={`flex ${classes.border} ${classes.borderRadius} ${classes.inpHeight} ${classes.inpWidthTarih} mr-2.5 pl-6`}>
          <Image src={calendarIcon} alt="tatil konaklama tarihi"/>
        <input className="w-full cyanTone pl-1.5" type="text" value="Konaklama Tarihi" />
      </div>
      <div className={`flex ${classes.border} ${classes.borderRadius} ${classes.inpHeight} ${classes.inpWidthKisi} mr-2.5 pl-6`}>
          <Image src={bedIcon} alt="tatil kisi"/>
        <button className="w-full cyanTone pl-1.5 flex justify-start items-center" type="text"><span className="mr-16">Kişi Sayısı</span><Image src={arrowDownIcon} alt="kisi sayisi"/></button>
      </div>
      <button className={`${classes.buttonArama} ${classes.inpHeight} whiteTone`}>Otel Ara</button>
    </form>
  );
};

export default SearchArea;
