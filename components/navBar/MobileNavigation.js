import Image from "next/image";

import burgerMenu from "../../public/icons/menu.svg";
import account from "../../public/icons/person.svg";
import logo from "../../public/mobileLogo.svg"

const MobileNavigation = () => {
    return (
        <div className="flex px-6 justify-between items-center h-16">
            <div className="flex">
            <Image src={burgerMenu} alt=""/>
            <span className="poppins10">Menu</span>
            </div>
            <Image src={logo} alt="tatilbudur.com"/>
            <button><Image src={account} alt=""/></button>
        </div>
    )
}

export default MobileNavigation;