import Link from "next/link";

import SubMenuButton from "../../../shared/SubMenuButton";

const NextSeasonNav = () => {
  return (
    <div className="pt-1.5 mb-2.5">
      <div className="flex justify-between">
          <ul className="flex">
            <SubMenuButton title="Son Gezdiğiniz Oteller" isActive={true} />
            <SubMenuButton title="En Çok Aranan Oteller"  padding="px-7"/>
            <SubMenuButton title="Tükenmek Üzere Olan Oteller"/>       
          </ul>
          <div className="hidden md:block">
          <Link href="/asd"><a><span className="poppinsRegular blueTone poppins14 pr-5">Daha fazla göster</span></a></Link>
          </div>
      </div>
    </div>
  );
};

export default NextSeasonNav;
