import Image from "next/image";

import classes from "./questionSection.module.css";

import milliGurur from "../../../public/pics/milligurur.png";
import is from "../../../public/pics/is.png";
import isGirisim from "../../../public/pics/isGirisim.png";

const SupporterBanner = () => {
  return (
    <div className={`block sm:flex  justify-center lx:w-1360 mt-10 ${classes.supporter}`}>
      <div className="flex justify-center sm:justify-start">
        <div>
          <Image src={milliGurur} alt="milliGurur" />
        </div>
        <div className={`${classes.milliGurur}`}>
          <h3>#milligururbudur</h3>
          <span className="poppinsRegular">
            Tatilbudur.com Basketbol Milli Takımlar ANA SPONSORU
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <Image src={is} alt="is bankasi ortakligi" />
        </div>
        <span className="flex flex-col">
          <span>Tatilbudur.com bir </span>
          <span>
            <Image src={isGirisim} alt="is girisimci" />{" "}
          </span>
          <span>ortaklığıdır.</span>
        </span>
      </div>
    </div>
  );
};

export default SupporterBanner;
