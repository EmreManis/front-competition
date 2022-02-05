import Image from "next/image";

import NavigationItem from "./NavigationItem";
import { menuData } from "../../data/menuData"

import classes from "./navigation.module.css";
import logo from "../../public/logo.webp";
import iconFeather from "../../public/icons/iconFeather.svg";

const Navigation = () => {


  return (
    <nav className={`${classes.navMargin} grid grid-cols-3 `}>
      <div className="justify-start">
        <Image src={logo} alt="tatil budur" width={218} height={42}/>
      </div>
      <div className="flex justify-center">
        <NavigationItem title="Otel" type="Otelleri" countType="Otel" otelType={menuData.otelType} locations={menuData.locations} img={menuData.img}/>
        <NavigationItem title="Turlar" type="Turları" countType="Tur" otelType={menuData.otelType} locations={menuData.locations} img={menuData.img}/>
        <NavigationItem title="Kampanyalar" type="Kampanyaları"  countType="Kampanya" otelType={menuData.otelType} locations={menuData.locations} img={menuData.img}/>
      </div>
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
