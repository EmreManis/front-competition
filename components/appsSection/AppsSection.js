import Image from "next/image";

import classes from "./appsSection.module.css";

import appleIcon from "../../public/appIcons/appstore.png";
import googleIcon from "../../public/appIcons/googleplay.png";
import huaweiIcon from "../../public/appIcons/huawei.png";

import appPic from "../../public/pics/app.png";
import qrCode from "../../public/pics/qr.png";

const AppsSection = () => {
  return (
    <section className={`flex justify-center mt-15 ${classes.appsSection}`}>
      <div className={`flex width1360 borderRadius26 ${classes.appsSectionBg}`}>
        <div>
          <h1>
            TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!
          </h1>
          <div>
            <Image src={appleIcon} alt="apple-tatilBudur" />
            <Image src={googleIcon} alt="googleplay-tatilBudur" />
            <Image src={huaweiIcon} alt="huawei-tatilBudur" />
          </div>
        </div>
        <div className="flex">
          <div>
            <Image src={qrCode} alt="qr-tatilBudur" />
          </div>
          <Image src={appPic} alt="appPic" />
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
