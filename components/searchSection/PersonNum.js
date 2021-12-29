import { useState } from "react";
import Image from "next/image";

import classes from "./searchSection.module.css";

import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

import ChildAgeListBox from "./ChildAgeListBox";

import dashCircle from "../../public/icons/dash-circle.svg";
import plusCircle from "../../public/icons/plus-circle.svg";
import arrowDownIcon from "../../public/icons/arrowDown.svg";
import bedIcon from "../../public/icons/bed.svg";
import { bottom } from "@popperjs/core";



const PersonNum = (props) => {

  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-start'});

  return (
    <Popover className="flex">
      <Popover.Button ref={setReferenceElement} className="w-full cyanTone pl-1.5 flex justify-start items-center"> <Image src={bedIcon} alt="tatil kisi"/><span className="ml-1.5 mr-16 poppinsRegular cyanTone">Kişi Sayısı</span><Image src={arrowDownIcon} alt="kisi sayisi"/></Popover.Button>

      <Popover.Panel
        className={`mt-0.5 borderRadius z-10 bg-white ${classes.popChildShadow}`}  
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div
          className={`${classes.inpWidthKisi} ${classes.popKisi} flex flex-col justify-evenly items-center`}
        >
          <div className="w-full p-4 h-20 flex flex-col justify-evenly">
            <div className="flex justify-between">
              <div>
                <span className="poppins12">Yetişkin</span>
              </div>
              <div className="poppins14 flex justify-between w-1/2">
                <button className="w-5 h-5"><Image src={dashCircle} alt="azalt"/></button>
                <span>1</span>
                <button className="w-5 h-5 flex justify-center"><Image src={plusCircle} alt="arttir"/></button>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="poppins12">Çocuk</span>
              </div>
              <div className="poppins14 flex justify-between w-1/2">
                <button className="w-5 h-5"><Image src={dashCircle} alt="azalt"/></button>
                <span>2</span>
                <button className="w-5 h-5 flex justify-center"><Image src={plusCircle} alt="arttir"/></button>
              </div>
            </div>
          </div>
          <div className="h-20 flex flex-col items-center justify-around w-full">
            <p className="poppins10">LÜTFEN ÇOCUKLARIN YAŞINI SEÇİNİZ</p>
            <div className="flex justify-evenly w-full">
              <ChildAgeListBox />
              <ChildAgeListBox />
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
