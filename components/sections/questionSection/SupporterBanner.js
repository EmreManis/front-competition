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
        <div className={`pl-4  ${classes.milliGurur}`}>
          <h3>#milligururbudur</h3>
          <span className="poppinsRegular">
            Tatilbudur.com Basketbol Milli Takımlar ANA SPONSORU
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-9 md:mt-0">
        <div>
          <Image src={is} alt="is bankasi ortakligi" />
        </div>
        <div className="flex pl-4 md:pl-0 flex-col">
          <span>Tatilbudur.com bir </span>
          <span>
            <Image src={isGirisim} alt="is girisimci" />{" "}
          </span>
          <span>ortaklığıdır.</span>
        </div>
      </div>
    </div>
  );
};

export default SupporterBanner;
