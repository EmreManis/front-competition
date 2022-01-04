import { useState } from "react";

import SubMenuButton from "./SubMenuButton";

const SubMenuNav = (props) => {
    const [isActive, setIsActive] = useState(0);

    const activeHandler = (id) => {
      setIsActive(id);
    }

    return (
        <ul className="flex">
            {
              props.menuList.map((name, id) =>{
                return (
                <SubMenuButton 
                  title={name} 
                  key={id} 
                  padding={props.isPadding[id] && "px-7"} 
                  isActive={isActive === id ? true : false} 
                  onClick={() =>activeHandler(id)}/>
                  )
              })
            }
          </ul>
    )
}

export default SubMenuNav;
