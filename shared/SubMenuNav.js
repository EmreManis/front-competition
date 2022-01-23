import { useState } from "react";

import SubMenuButton from "./SubMenuButton";

import classes from "./subMenu.module.css";

const SubMenuNav = (props) => {
    const [changeActive, setChangeActive] = useState(0);

    const activeHandler = (id) => {
      setChangeActive(id);
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
                  changeActive={changeActive === id ? true : false} 
                  onClick={() =>activeHandler(id)}/>
                  )
              })
            }
          </ul>
    )
}

export default SubMenuNav;
