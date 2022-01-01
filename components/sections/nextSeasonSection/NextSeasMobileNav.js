import { useState } from "react";
import Image from "next/image";

import classes from "./nextSeasSect.module.css";

import { Menu } from "@headlessui/react";
import { usePopper } from "react-popper";

import arrowDown from "../../../public/icons/arrowDown.svg";

export default function Example() {
    let [referenceElement, setReferenceElement] = useState();
    let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: "bottom-start"});
  return (
    <div>
      <Menu as="div">  
          <Menu.Button
            ref={setReferenceElement}
            className={`bg-white flex justify-between items-center px-4 ${classes.mobileNavButton}`}
          >
            Son Gezdiğiniz Oteller
            <Image src={arrowDown} alt=""/>
          </Menu.Button>
        <Menu.Items
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={`z-30 bg-white rounded-md shadow-lg  ${classes.mobileNavMenu}`}
        >
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : ""
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Son Gezdiğiniz Oteller
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : ""
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  En Çok Aranan Oteller
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : ""
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Tükenmek Üzere Olan Oteller
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
