import Link from "next/link";
import Image from "next/image";

import classes from "./Navigation.module.css";
import arrowDownIcon from "../../public/icons/arrowDown.svg";


const NavigationItem = (props) => {
  return (
    <li className={`${classes.menuItem} flex`}>
      <Link href={`${props.href}`}>
        <a className="flex justify-center items-center">
        {`${props.title}`}<span className="ml-2 flex justify-center" ><Image src= {arrowDownIcon} alt="tatil budur menu"/></span>
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
