import Image from "next/image";

import classes from "./appsSection.module.css";

import appleIcon from "../../../public/appIcons/appstore.png";
import googleIcon from "../../../public/appIcons/googleplay.png";
import huaweiIcon from "../../../public/appIcons/huawei.png";

import googleSvg from "../../../public/appIcons/googleplay.svg";
import appleSvg from "../../../public/appIcons/apple.jpg";
import huaweiSvg from "../../../public/appIcons/huawei.svg";

import appPic from "../../../public/pics/app.png";
import qrCode from "../../../public/pics/qr.png";

const AppsSection = () => {
  return (
    <section
      className={`flex mt-8 md:mt-14 md:mb-14 justify-center  ${classes.appsSection}`}
    >
      <div
        className={`m-5 sm:m-0 flex overflow-hidden md:overflow-visible justify-between md:justify-around md:w-1360 borderRadius26 ${classes.appsSectionBg}`}
      >
        <div className="flex flex-col text-center md:text-justify justify-center basis-1/2">
          <h1 className="md:poppins20 poppinsSemiBold mb-5">
            TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!
          </h1>
          <div className="hidden sm:block">
            <Image src={appleIcon} alt="apple-tatilBudur" />
            <span className="mx-2">
              <Image src={googleIcon} alt="googleplay-tatilBudur" />
            </span>
            <Image src={huaweiIcon} alt="huawei-tatilBudur" />
          </div>
          <div className="block sm:hidden">
            <div className="mb-4">
              <Image src={appleSvg} alt="apple-tatilBudur" />
              <span className="mx-4">
                <Image src={googleSvg} alt="googleplay-tatilBudur" />
              </span>
              <Image src={huaweiSvg} alt="huawei-tatilBudur" />
            </div>
            <button className={classes.downloadButton}><span className="poppins14 poppinsBold whiteTone">İndir</span></button>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center">
          <div className={classes.qrCode}>
            <Image src={qrCode} alt="qr-tatilBudur" height={140} width={140} />
          </div>
          <span className="poppins12 w-2/3 text-center">
            İndirmek için QR Kodu Tarayın
          </span>
        </div>
        <div className={classes.imagePosition}>
          <Image src={appPic} alt="appPic" />
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
