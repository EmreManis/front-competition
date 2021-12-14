import Image from "next/image";

import classes from "./banner.module.css";

import personIcon from "../../public/icons/person.svg";

const Banner = () => {
  return (
    <div className="flex justify-center mt-7">
      <div
        className={`widthSearch borderRadiusSection flex items-center justify-between px-6 ${classes.bannerBg}`}
      >
        <div className="flex">
          <div className="flex">
            <Image src={personIcon} alt="tatil budur giris" />
            <h1 className="font-bold poppins14 self-center">
              Üyelere özel indirimli fiyatlar
            </h1>
          </div>
          <div className="flex items-center ml-9">
            <p className="poppins14">
              Giriş yaptığınızda daha düşük fiyatlar görürsünüz!
            </p>
          </div>
        </div>
        <button className={` ${classes.button}`}>
          <span className="text-xs">Giriş Yapın</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
