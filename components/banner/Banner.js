import Image from "next/image";

import classes from "./banner.module.css";

import personIcon from "../../public/icons/person.svg";

const Banner = () => {
  return (
    <div className="flex justify-center mt-7">
      <div>
        <div
          className={`borderRadiusSection flex flex-col md:flex-row md:items-center justify-center md:justify-between md:px-6 ${classes.bannerBgHeight} ${classes.bannerBg}`}
        >
          <div className="flex px-4 md:px-0 justify-center">
            <div className="">
              <Image src={personIcon} alt="tatil budur giris" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <h1 className="font-bold poppins14">
                Üyelere özel indirimli fiyatlar
              </h1>
              <div className="px-0 md:px-4">
                <p className="poppins14">
                  Giriş yaptığınızda daha düşük fiyatlar görürsünüz!
                </p>
              </div>
            </div>
          </div>
          <button
            className={`ml-16 mt-2 md:ml-0 md:mt-0 ${classes.buttonHeight} ${classes.button}`}
          >
            <span className="text-xs">Giriş Yapın</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
