import Link from "next/link";

import SubMenuNav from "../../../shared/SubMenuNav";

const menuList= ["Son Gezdiğiniz Oteller", "En Çok Aranan Oteller", "Tükenmek Üzere Olan Oteller"];
const isPadding = [false, true, false]

// Validation should be considered when implementing unit test
// To check if length(menuList) == length(isPadding)

const NextSeasNav = () => {
  return (
    <div className="pt-1.5 mb-2.5">
      <div className="flex justify-between">
      <SubMenuNav menuList={menuList} givePadding={isPadding}/>
          <div className="hidden md:block">
          <Link href="/asd"><a><span className="poppinsRegular blueTone poppins14 pr-5">Daha fazla göster</span></a></Link>
          </div>
      </div>
    </div>
  );
};

export default NextSeasNav;
