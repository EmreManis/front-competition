import Image from "next/image";

import NavigationItem from "./NavigationItem";

import classes from "./Navigation.module.css";
import logo from "../../public/logo.svg";
import iconFeather from "../../public/icons/iconFeather.svg";

const Navigation = () => {
  return (
    <nav className={`${classes.navMargin} grid grid-cols-4 `}>
      <div className="justify-start">
        <Image src={logo} alt="tatil budur" />
      </div>
      <ul className="flex col-span-2 justify-center">
        <NavigationItem href="/otel" title="Otel" />
        <NavigationItem href="/tur" title="Tur" />
        <NavigationItem href="/kampanyalar" title="Kampanyalar" />
      </ul>
      <div className="flex justify-end items-center">
        <div
          className={`${classes.boxNumber} ${classes.boxCommon} mr-4 flex justify-center items-center`}
        >
          <Image src={iconFeather} alt="tatil budur iletisim" />
          <span className="ml-2.5 text-xs colorCyan">0 850 333 3 33</span>
        </div>
        <button
          className={`${classes.buttonLogin} ${classes.boxCommon} flex justify-center items-center`}
        >
          <span className="text-xs colorCyan">Giriş Yapın</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
