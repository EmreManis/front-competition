import Link from "next/link";

const NextSeasonMenu = () => {
  return (
    <div className="pt-1.5 mt-12 mb-2.5">
      <div className="mb-5">
          <h1 className="poppins24">Yazın ilk fırsatlarını kaçırma!</h1>
      </div>
      <div className="flex justify-between">
          <ul className="flex">
              <li className=""><Link href="/asd"><a><span className="poppinsSemiBold poppins14 borderMenu pb-3">Son Gezdiğiniz Oteller</span></a></Link></li>
              <li className="px-7"><Link href="/asd"><a><span className="poppinsRegular poppins14">En Çok Aranan Oteller</span></a></Link></li>
              <li><Link href="/asd"><a><span className="poppinsRegular poppins14">Tükenmek Üzere Olan Oteller</span></a></Link></li>
              
          </ul>
          <Link href="/asd"><a><span className="poppinsRegular blueTone poppins14 pr-5">Daha fazla göster</span></a></Link>
      </div>
    </div>
  );
};

export default NextSeasonMenu;
