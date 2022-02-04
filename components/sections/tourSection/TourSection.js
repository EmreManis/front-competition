import TourAdv from "./TourAdv";
import Slide from "./Carousel";
import SubMenuButton from "../../../shared/SubMenuButton";

import useActive from "../../../shared/menu-hook";

import classes from "./tourSection.module.css";

const menuList = [
  "Yurt dışı Turları",
  "Gemi Turları",
  "Kültür Turları",
  "Haftasonu Turları",
  "Mavi Turlar",
];
const isPadding = [false, true, false, true, false];

const TourSection = () => {

  const [activeId, activeHandler] = useActive();

  return (
    <section className="md:flex flex-col items-center md:mt-16">
      <div className={`xl:w-1360 md:borderRadius26 ${classes.tourSection}`}>
        <div className="pt-1.5 md:mt-12 md:mb-2.5">
          <div className="mb-5">
            <h1 className="hidden md:block poppins24">
              Her Zevke Uygun Turları Keşfet
            </h1>
            <h1 className="block text-center md:hidden poppins24">Turlar</h1>
          </div>
          <div className={`flex justify-between ${classes.itemsMedia}`}>
              <ul className="flex">
            {
              menuList.map((name, id) =>{
                return (
                <SubMenuButton 
                  title={name} 
                  key={id} 
                  padding={`${isPadding[id] && "paddingMenu"}`} 
                  changeActiveId={activeId === id ? true : false} 
                  onClick={() => activeHandler(id)}/>
                  )
              })
            }
          </ul>
          </div>
        </div>
        <TourAdv activeSection={activeId}/>
        <Slide />
      </div>
    </section>
  );
};

export default TourSection;
