import SubMenuButton from "../../../shared/SubMenuButton";

import classes from "./tourSection.module.css";

const TourSectionMenu = () => {
    return (
        <div className="pt-1.5 mt-12 md:mb-2.5">
      <div className="mb-5">
          <h1 className="hidden md:block poppins24">Her Zevke Uygun Turları Keşfet</h1>
          <h1 className="block text-center md:hidden poppins24">Turlar</h1>
      </div>
      <div className={`flex justify-between ${classes.itemsMedia}`}>
          <ul className="flex">
            <SubMenuButton title="Yurt dışı Turları" isActive={true} />
            <SubMenuButton title="Gemi Turları" padding="px-7"/>
            <SubMenuButton title="Kültür Turları"/>       
            <SubMenuButton title="Haftasonu Turları" padding="px-7"/>       
            <SubMenuButton title="Mavi Turlar"/>       
          </ul>
      </div>
    </div>
    )
}

export default TourSectionMenu;