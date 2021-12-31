import SubMenuButton from "../../../shared/SubMenuButton";

const TourSectionMenu = () => {
    return (
        <div className="pt-1.5 mt-12 mb-2.5">
      <div className="mb-5">
          <h1 className="poppins24">Her Zevke Uygun Turları Keşfet</h1>
      </div>
      <div className="flex justify-between">
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