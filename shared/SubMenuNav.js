import { useState } from "react";

import SubMenuButton from "./SubMenuButton";

import classes from "./subMenu.module.css";

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
                  padding={`${props.givePadding[id] && classes.paddingMenu}`} 
                  isActive={isActive === id ? true : false} 
                  onClick={() =>activeHandler(id)}/>
                  )
              })
            }
          </ul>
    )
}

export default SubMenuNav;
