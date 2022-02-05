import { useState, useReducer } from "react";
import Image from "next/image";
import BasicDateRangePicker from "./checkInOut/DateRangePicker";

import LocationAutoComplete from "./otelFinder/LocationAutoComplete";

import classes from "./searchSection.module.css";

import calendarIcon from "../../../public/icons/calendar.svg";
import mapIcon from "../../../public/icons/map.svg";
import PersonNum from "./personNumbers/PersonNum";
import ucusAra from "../../../public/icons/ucusAra.webp";

function reducer(familyInfo, action) {
  switch (action.type) {
    case "incrementKid":
      if (familyInfo.kidNumber < 5) {
        return {
          ...familyInfo,
          kidNumber: familyInfo.kidNumber + 1,
        };
      } else return { ...familyInfo };

    case "decrementKid":
      if (familyInfo.kidNumber > 0) {
        return {
          ...familyInfo,
          kidNumber: familyInfo.kidNumber - 1,
        };
      } else return { ...familyInfo };
    case "incrementPerson":
      if (familyInfo.personNumber < 6) {
        return {
          ...familyInfo,
          personNumber: familyInfo.personNumber + 1,
        };
      } else return { ...familyInfo };
    case "decrementPerson":
      if (familyInfo.personNumber > 1) {
        return {
          ...familyInfo,
          personNumber: familyInfo.personNumber - 1,
        };
      } else return { ...familyInfo };
  }
}

const SearchArea = (props) => {
  let isActive = props.isActive;

  const initialState = {
    personNumber: 1,
    kidNumber: 0,
    // In case of scaling, this needs to be converted to array
    kidAge: {
      age1: 0,
      age2: 0,
    },
  };

  const [familyInfo, dispatch] = useReducer(reducer, initialState);

  const familyHandler = (event, type) => {
    event.preventDefault();
    dispatch({ type: type });
  };

  const [date, setDate] = useState([null, null]);
  const [address, setAdress] = useState("");

  const dateHandler = (newValue) => {
    setDate(newValue);
    dispatch({ type: "setDate", payload: date });
  };

  const addressHandler = (address) => {
    setAdress(address);
  };

  console.log(address);

  return (
    <form className="flex flex-col md:flex-row">
      <div
        className={`flex border borderRadius mr-2.5 ${classes.inpHeight}  ${classes.inpWidthOtel} pl-6`}
      >
        <div className="flex items-center">
          <Image
            src={isActive === 0 ? mapIcon : ucusAra}
            alt="tatil budur konaklama"
            width={16}
            height={20}
          />
        </div>
        <LocationAutoComplete
          address={address}
          addressHandler={addressHandler}
          isActive={isActive}
        />
      </div>
      <div
        className={`flex border borderRadius my-2 md:my-0 ${classes.inpHeight} ${classes.inpWidthTarih} mr-2.5 pl-6`}
      >
        <div className="w-1/4 flex items-center">
          <Image
            src={calendarIcon}
            alt="tatil konaklama tarihi"
            width={22}
            height={22}
          />
        </div>
        <BasicDateRangePicker
          isActive={isActive}
          value={date}
          dateHandler={dateHandler}
        />
      </div>
      <div
        className={`flex border borderRadius mb-4 md:mb-0 ${classes.inpHeight} ${classes.inpWidthKisi} mr-2.5`}
      >
        <PersonNum
          isActive={isActive}
          stateHandler={familyHandler}
          personNumber={familyInfo.personNumber}
          kidNumber={familyInfo.kidNumber}
        />
      </div>
      <button
        className={`${classes.buttonArama} ${classes.inpHeight} ${classes.buttonWidth} whiteTone`}
      >
        Otel Ara
      </button>
    </form>
  );
};

export default SearchArea;
