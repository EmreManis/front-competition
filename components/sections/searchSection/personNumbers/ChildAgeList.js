import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { usePopper } from "react-popper";

import classes from "../searchSection.module.css";

const ChildAgeList = (props) => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  let childAge = [];

  for (let i = 0; i <= 15; i++) {
    childAge.push(i);
  }

  const [selectedAge, setSelectedAge] = useState(childAge[0]);
  return (
    <div>
      <Listbox value={selectedAge} onChange={setSelectedAge}>
        <Listbox.Button
          ref={setReferenceElement}
          className={`border borderRadius h-10 ${classes.listBox}`}
        >
          {selectedAge}
        </Listbox.Button>
        <Listbox.Options
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={`flex flex-col borderRadius items-center bg-white ${classes.listBox}`}
        >
          {childAge.map((age) => (
            <Listbox.Option className={`flex flex-col items-center ${classes.itemHovered} ${classes.listBox}`} key={age} value={age}>
              {age}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ChildAgeList;
