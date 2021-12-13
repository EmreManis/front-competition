import Link from "next/link";

import classes from "./Navigation.module.css";

const arrowDown = (
  <svg
    id="Icon_awesome-angle-down"
    data-name="Icon awesome-angle-down"
    xmlns="http://www.w3.org/2000/svg"
    width="9.29"
    height="6"
    viewBox="0 0 9.29 6"
  >
    <path
      id="Icon_awesome-angle-down-2"
      data-name="Icon awesome-angle-down"
      d="M4.151,16.535.2,12.586a.694.694,0,0,1,0-.985l.656-.656a.694.694,0,0,1,.985,0l2.8,2.8,2.8-2.8a.694.694,0,0,1,.985,0l.656.656a.694.694,0,0,1,0,.985l-3.95,3.95A.691.691,0,0,1,4.151,16.535Z"
      transform="translate(0.004 -10.74)"
      fill="#6f7e90"
    />
  </svg>
);

const NavigationItem = (props) => {
  return (
    <li className={`${classes.menuItem} flex`}>
      <Link href={`${props.href}`}>
        <a className="flex justify-center items-center colorCyan">
        {`${props.title}`}<span className="ml-2">{arrowDown}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
