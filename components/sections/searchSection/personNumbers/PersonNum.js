import { useState, useReducer } from "react";
import Image from "next/image";

import classes from "../searchSection.module.css";

import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

import ChildAgeList from "./ChildAgeList";

import dashCircle from "../../../../public/icons/dash-circle.webp";
import plusCircle from "../../../../public/icons/plus-circle.webp";
import arrowDownIcon from "../../../../public/icons/arrowDown.webp";
import bedIcon from "../../../../public/icons/bed.svg";


const PersonNum = (props) => {

  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });


  return (
    <Popover className="flex">
      <Popover.Button
        ref={setReferenceElement}
        className="w-full cyanTone pl-6 flex md:justify-start items-center"
      >
        <Image src={bedIcon} alt="tatil kisi" />
        <span className="ml-1.5 poppinsRegular cyanTone">Kişi Sayısı</span>
        <span className="md:ml-14 ml-56">
          <Image src={arrowDownIcon} alt="kisi sayisi" width={7} height={5}/>
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
                  className={`w-5 h-5 ${props.personNumber === 1 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => props.stateHandler(e, "decrementPerson")}
                >
                  <Image src={dashCircle} alt="azalt"  height={20} width={20}/>
                </button>
                <span>{props.personNumber}</span>
                <button
                  className={`w-5 h-5 flex justify-center ${props.personNumber === 6 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => props.stateHandler(e, "incrementPerson")}
                >
                  <Image src={plusCircle} alt="arttir" height={20} width={20}/>
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="poppins12">Çocuk</span>
              </div>
              <div className="poppins14 flex justify-between basis-1/2">
                <button
                  className={`w-5 h-5 ${props.kidNumber === 0 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => props.stateHandler(e, "decrementKid")}
                >
                  <Image src={dashCircle} alt="azalt"  height={20} width={20}/>
                </button>
                <span>{props.kidNumber}</span>
                <button
                  className={`w-5 h-5 flex justify-center ${props.kidNumber === 5 && "pointer-events-none opacity-50"}`}
                  onClick={(e) => props.stateHandler(e, "incrementKid")}
                >
                  <Image src={plusCircle} alt="arttir"  height={20} width={20}/>
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
