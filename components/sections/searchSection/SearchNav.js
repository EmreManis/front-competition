import { useState } from "react";
import Image from "next/image";

import classes from "./searchSection.module.css";

import otelAra from "../../../public/icons/otelAra.webp";
import ucusAra from "../../../public/icons/ucusAra.webp";
import turAra from "../../../public/icons/turAra.svg";

const menuList = [
  {
    name: 'Otel Ara',
    image: otelAra,
    alt: "tatil budur otel"
  },
  {
    name: 'Uçuş Ara',
    image: ucusAra,
    alt: "tatil budur ucus",
    widthHeight: 13,

  },
  {
    name: 'Tur Ara',
    image: turAra,
    alt: "tatil budur tur"
  },
]

const SearchNav = () => {

  const [isActive, setIsActive] = useState(0);

  const activeHandler = (id) => {
    setIsActive(id);
  }

  return (
    <div className="md:mb-14 mb-6">
      <ul className="flex">
        {menuList.map((obj, id) => {
          return (
            <li
              key={id}
              className={`h-8 ${classes.inpMargin} ${isActive === id && classes.borderColorful} `}
            >
              <button  isActive={isActive === id ? true : false} 
                  onClick={() =>activeHandler(id)}>
                <Image src={obj.image} alt={obj.alt} width={obj.widthHeight} height={obj.widthHeight}/>
                <span className={`pl-2 ${isActive === id ? "" : "poppinsRegular cyanTone"}`}>{obj.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchNav;
