import { useState } from "react";
import Image from "next/image";
import { usePopper } from "react-popper";

import NavigationItem from "./NavigationItem";

import classes from "./navigation.module.css";
import logo from "../../public/logo.svg";
import iconFeather from "../../public/icons/iconFeather.svg";

const Navigation = () => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <nav className={`${classes.navMargin} grid grid-cols-4 `}>
      <div className="justify-start">
        <Image src={logo} alt="tatil budur" />
      </div>
      <NavigationItem title="Otel" menuItem="Otel"/>
      <NavigationItem title="Turlar" menuItem="Tur"/>
 
      <div className="flex justify-end items-center">
        <div
          className={`${classes.boxNumber} ${classes.boxCommon} mr-4 flex justify-center items-center`}
        >
          <Image src={iconFeather} alt="tatil budur iletisim" />
          <span className="ml-2.5 text-xs">0 850 333 3 33</span>
        </div>
        <button
          className={`${classes.buttonLogin} ${classes.boxCommon} flex justify-center items-center`}
        >
          <span className="text-xs">Giriş Yapın</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
