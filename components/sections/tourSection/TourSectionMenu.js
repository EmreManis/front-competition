import SubMenuNav from "../../../shared/SubMenuNav";

import classes from "./tourSection.module.css";

const menuList= ["Yurt dışı Turları", "Gemi Turları", "Kültür Turları", "Haftasonu Turları",  "Mavi Turlar"];
const isPadding = [false, true, false, true, false]

const TourSectionMenu = () => {

    return (
        <div className="pt-1.5 md:mt-12 md:mb-2.5">
      <div className="mb-5">
          <h1 className="hidden md:block poppins24">Her Zevke Uygun Turları Keşfet</h1>
          <h1 className="block text-center md:hidden poppins24">Turlar</h1>
      </div>
      <div className={`flex justify-between ${classes.itemsMedia}`}>
        <SubMenuNav menuList={menuList} isPadding={isPadding}/>
      </div>
    </div>
    )
}

export default TourSectionMenu;