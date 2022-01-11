import { useState } from "react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
import Link from "next/link";

import classes from "./navigation.module.css";

import arrowDownIcon from "../../public/icons/arrowDown.webp";
import forwardIcon from "../../public/icons/forwardIcon.webp";
import transfer from "../../public/menu/transfer.webp";
import menuForwardIcon from "../../public/icons/menuForwardIcon.webp";

const NavigationItem = (props) => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  const subMenuHandler = () => {};

  return (
    <Popover className="flex col-span-2 justify-center">
      <Popover.Button
        ref={setReferenceElement}
        className={`${classes.menuItem} flex items-center`}
      >
        {props.title}
        <span className="ml-2 flex justify-center">
          <Image src={arrowDownIcon} alt="tatil budur menu" width={7} height={5}/>
        </span>
      </Popover.Button>
      <Popover.Panel
        className={`bg-white z-10 borderRadius26 ${classes.panel}`}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className={`flex ${classes.menuHeight}`}>
          {/* main menu */}
          <div className="pt-8 px-11 flex flex-col" id="mainMenu">
            {props.otelType.map((val, index) => (
              <button
                type="button"
                onClick={subMenuHandler}
                className={`poppins14 borderRadius8 ${classes.menuForwardIcon}`}
                key={index}
              >
                <div
                  className={`flex px-4 justify-between items-center ${classes.buttonSize}`}
                >
                  <p className="mr-8">{val}</p>
                  <span>
                    <Image src={menuForwardIcon} alt="" />
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className={`flex pt-8 px-8 ${classes.menuBg}`}>
              {/* sub menu */}
            <div>
              <div className="flex">
                <div>
                  {props.locations.city.map((val, index) => (
                    <span
                      className="flex flex-col poppinsRegular poppins14 mb-3 "
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
                  <span className="cursor-pointer">
                    <span className="blueTone poppins14 mr-1">Tümünü Gör</span>
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
                <Link href="/">
                  <a className="flex">
                    <div className="mr-2 flex items-center">
                      <Image src={transfer} alt="Transfer Hizmetleri" />
                    </div>
                    <span className="poppins14 orangeEa">
                      Ulaşım & Transfer Hizmetleri
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default NavigationItem;
