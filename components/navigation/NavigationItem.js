import { useState } from "react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
import Link from "next/link";

import classes from "./navigation.module.css";

import arrowDownIcon from "../../public/icons/arrowDown.svg";
import forwardIcon from "../../public/icons/forwardIcon.svg";
import transfer from "../../public/menu/transfer.svg";

const NavigationItem = (props) => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover className="flex col-span-2 justify-center">
      <Popover.Button
        ref={setReferenceElement}
        className={`${classes.menuItem} flex items-center`}
      >
        {props.title}
        <span className="ml-2 flex justify-center">
          <Image src={arrowDownIcon} alt="tatil budur menu" />
        </span>
      </Popover.Button>
      <Popover.Panel
        className={`bg-white z-10 borderRadius26 ${classes.panel}`}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className="flex">
          <div className="pt-8 px-11">
            <ul>
              {props.otelType.map((val, index) => (
                <li className="poppins14 mb-8" key={index}>
                  {val}
                </li>
              ))}
            </ul>
          </div>
          <div className={`flex pt-6 px-8 ${classes.menuBg}`}>
            <div>
              <div className="flex">
                <div>
                  {props.locations.city.map((val, index) => (
                    <span
                      className="flex flex-col poppinsRegular poppins14 mb-3"
                      key={index}
                    >
                      {val} Otelleri
                    </span>
                  ))}
                </div>
                <div className="mx-12">
                  {props.locations.num.map((val, index) => (
                    <span
                      className={`flex flex-col poppinsRegular poppins12 poppinsRegular pb-0.5 mb-3 ${classes.numPadding}`}
                      key={index}
                    >
                      {val} Otel
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Link href="/" passHref>
                  <span className="blueTone poppins14">
                    Tümünü Gör
                    <Image src={forwardIcon} alt="tum oteller" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                {props.img.map((val, index) => (
                  <div key={index} className="pb-2">
                    <Image src={val} alt={index} height={150} width={278} />
                  </div>
                ))}
              </div>
              <div
                className={`flex justify-center items-center p-1 ${classes.transfer}`}
              >
                <div className="mr-2 flex items-center">
                  <Image src={transfer} alt="Transfer Hizmetleri" />
                </div>
                <span className="poppins14 orangeEa">
                  Ulaşım & Transfer Hizmetleri
                </span>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default NavigationItem;
