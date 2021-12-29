import { useState } from "react";
import { Listbox } from "@headlessui/react";

import classes from "./searchSection.module.css";

const ChildAgeListBox = (props) => {
  let childAge = [];

  for (let i = 0; i <= 15; i++) {
    childAge.push(i);
  }

  const [selectedAge, setSelectedAge] = useState(childAge[0]);
  return (
    <div>
      <Listbox value={selectedAge} onChange={setSelectedAge}>
        <Listbox.Button className={`border borderRadius h-10 ${classes.listBox}`}>{selectedAge}</Listbox.Button>
        <Listbox.Options className="flex flex-col items-center">
          {childAge.map((age) => (
            <Listbox.Option key={age} value={age}>
              {age}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ChildAgeListBox;
