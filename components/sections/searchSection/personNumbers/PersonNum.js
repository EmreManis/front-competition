import { useState, useReducer } from "react";
import Image from "next/image";

import classes from "../searchSection.module.css";

import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

import ChildAgeList from "./ChildAgeList";

import dashCircle from "../../../../public/icons/dash-circle.svg";
import plusCircle from "../../../../public/icons/plus-circle.svg";
import arrowDownIcon from "../../../../public/icons/arrowDown.svg";
import bedIcon from "../../../../public/icons/bed.svg";

function reducer(state, action) {
  switch (action.type) {
    case "incrementKid":
      if (state.kidNumber < 5) {
        return {
          ...state,
          kidNumber: state.kidNumber + 1,
        };
      } else return { ...state };

    case "decrementKid":
      if (state.kidNumber > 0) {
        return {
          ...state,
          kidNumber: state.kidNumber - 1,
        };
      } else return { ...state };
    case "incrementPerson":
      if (state.personNumber < 6) { 
        return {
          ...state,
          personNumber: state.personNumber + 1,
        };
      } else return { ...state };  
    case "decrementPerson":
      if (state.personNumber > 1) {
        return {
          ...state,
          personNumber: state.personNumber - 1,
        };
      } else return { ...state };
  }
}

const PersonNum = (props) => {
  const initialState = {
    personNumber: 1,
    kidNumber: 0,
  };

  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementHandler = (event, type) => {
    event.preventDefault();
    dispatch({ type: type });
  };

  console.log(state)

  return (
    <Popover className="flex">
      <Popover.Button
        ref={setReferenceElement}
        className="w-full cyanTone pl-6 flex md:justify-start items-center"
      >
        <Image src={bedIcon} alt="tatil kisi" />
        <span className="ml-1.5 poppinsRegular cyanTone">Kişi Sayısı</span>
        <span className="md:ml-14 ml-56">
          <Image src={arrowDownIcon} alt="kisi sayisi" />
        </span>
      </Popover.Button>

      <Popover.Panel
        className={`mt-0.5 borderRadius z-10 bg-white ${classes.popChildShadow}`}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div
          className={`${classes.inpWidthKisi} ${classes.popKisi} flex flex-col justify-evenly items-center`}
        >
          <div className={`p-4 h-20 flex flex-col ${classes.inpWidthKisi}`}>
            <div className="flex justify-between">
              <div>
                <span className="poppins12">Yetişkin</span>
              </div>
              <div className="poppins14 flex justify-between basis-1/2">
                <button
                  className={`w-5 h-5 ${state.personNumber === 1 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => incrementHandler(e, "decrementPerson")}
                >
                  <Image src={dashCircle} alt="azalt" />
                </button>
                <span>{state.personNumber}</span>
                <button
                  className={`w-5 h-5 flex justify-center ${state.personNumber === 6 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => incrementHandler(e, "incrementPerson")}
                >
                  <Image src={plusCircle} alt="arttir" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="poppins12">Çocuk</span>
              </div>
              <div className="poppins14 flex justify-between basis-1/2">
                <button
                  className={`w-5 h-5 ${state.kidNumber === 0 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => incrementHandler(e, "decrementKid")}
                >
                  <Image src={dashCircle} alt="azalt" />
                </button>
                <span>{state.kidNumber}</span>
                <button
                  className={`w-5 h-5 flex justify-center ${state.kidNumber === 5 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => incrementHandler(e, "incrementKid")}
                >
                  <Image src={plusCircle} alt="arttir" />
                </button>
              </div>
            </div>
          </div>
          <div className="h-20 flex flex-col items-center justify-around">
            <p className="poppins10">LÜTFEN ÇOCUKLARIN YAŞINI SEÇİNİZ</p>
            <div className={`flex justify-evenly ${classes.inpWidthKisi}`}>
              <ChildAgeList />
              <ChildAgeList />
            </div>
          </div>
          <div className="flex justify-center items-center h-20 border-t">
            <button className={`${classes.buttonKisi} whiteTone`}>
              Uygula
            </button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default PersonNum;
