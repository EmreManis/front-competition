import Link from "next/link";

import SubMenuButton from "../../../shared/SubMenuButton";

const NextSeasonNav = () => {
  return (
    <div className="pt-1.5 mt-12 mb-2.5">
      <div className="mb-5">
          <h1 className="poppins24">Yazın ilk fırsatlarını kaçırma!</h1>
      </div>
      <div className="flex justify-between">
          <ul className="flex">
            <SubMenuButton title="Son Gezdiğiniz Oteller" isActive={true} />
            <SubMenuButton title="En Çok Aranan Oteller" padding="px-7"/>
            <SubMenuButton title="Tükenmek Üzere Olan Oteller"/>       
          </ul>
          <Link href="/asd"><a><span className="poppinsRegular blueTone poppins14 pr-5">Daha fazla göster</span></a></Link>
      </div>
    </div>
  );
};

export default NextSeasonNav;
