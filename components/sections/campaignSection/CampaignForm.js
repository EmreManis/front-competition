import Image from "next/image";

import classes from "./campaignSection.module.css";

import model from "../../../public/pics/model.png";
import mailIcon from "../../../public/icons/mail.svg";
import checkBox from "../../../public/icons/checkboxChecked.svg";

const CampaignForm = () => {
  return (
    <section className={`flex justify-center mt-10 ${classes.campForm}`}>
      <div className={`flex mx-5 md:mx-0 xl:w-1360 borderRadius26 ${classes.campFormBg}`}>
        <div className="hidden md:block">
          <Image src={model} alt="tatilbudur" />
        </div>
        <div className="flex flex-col pl-5 justify-evenly">
          <div className={`flex items-center md:items-end h-1/6 basis-2/6 md:basis-0 ${classes.widthMediaHeader}`}>
            <h1 className="md:pt-8 poppins20 md:poppins24">
              Üyelere özel indirimlere ve harika fiyatlara erişim sağlayın
            </h1>
          </div>
          <form className="flex flex-col justify-start h-3/6 basis-4/6 md:basis-1/2 ">
            <div className="flex flex-col md:flex-row">
              <div
                className={`flex flex-row items-center ${classes.inputArea}`}
              >
                <div className={`flex ml-4`}>
                  <Image
                    src={mailIcon}
                    alt="email"
                    className={classes.image}
                    width={16}
                    height={13}
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <span className="poppins10 poppinsRegular">
                    E-Posta Adresiniz
                  </span>
                  <input
                    className={`${classes.campFormBg} ${classes.input}`}
                    type="email"
                    value="begum@begum.com"
                  />
                </div>
              </div>
              <div className={`mt-5 md:hidden flex ${classes.widthMediaFirsat}`}>
              <Image src={checkBox} alt="onay kutusu" />
              <div className="w-1/2 ml-3">
                <span className="poppinsSemiBold">%50’ye varan </span>
                <span className="poppins14">
                  Fırsat ve Kampanyalardan haberdar olmak istiyorum
                </span>
              </div>
            </div>
              
              <button
                className={`md:ml-8 mt-5 md:mt-0 hidden md:inline-block poppins14 poppinsBold ${classes.button}`}
              >
                Gönder
              </button>
            </div>
            <div className={`mt-5 hidden md:flex ${classes.widthMediaFirsat}`}>
              <Image src={checkBox} alt="onay kutusu" />
              <div className="w-1/2 ml-3">
                <span className="poppinsSemiBold">%50’ye varan </span>
                <span className="poppins14">
                  Fırsat ve Kampanyalardan haberdar olmak istiyorum
                </span>
              </div>
            </div>
            <div className="mt-4">
            <button
                className={`md:ml-8 mt-5 md:mt-0  md:hidden poppins14 poppinsBold ${classes.button}`}
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CampaignForm;
