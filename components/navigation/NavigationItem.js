import { useState } from "react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

import { menuData } from "../../data/menuData";
import classes from "./navigation.module.css";

import arrowDownIcon from "../../public/icons/arrowDown.svg";

const NavigationItem = props => {
    let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

console.log(menuData[0].locations);
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
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="grid grid-cols-3">
            <div>
              <ul>
                <li>{props.menuItem}</li>
                <li>Dummy2</li>
                <li>Dummy3</li>
              </ul>
            </div>
            <div>otells</div>
            <div>imagess</div>
          </div>
        </Popover.Panel>
      </Popover>
    )
}

export default NavigationItem;