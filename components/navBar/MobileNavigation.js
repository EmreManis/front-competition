import Image from "next/image";
import MobNavMenu from "./MobNavMenu";

import account from "../../public/icons/person.svg";
import logo from "../../public/mobileLogo.webp";

const MobileNavigation = () => {
  return (
    <div className="flex px-6 justify-between items-center h-16">
      <div className="flex">
        <MobNavMenu title="Menu"/>
      </div>
      <Image src={logo} alt="tatilbudur.com" width={87.5} height={39}/>
      <button>
        <Image src={account} alt="" />
      </button>
    </div>
  );
};

export default MobileNavigation;
