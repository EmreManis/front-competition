import Image from "next/image";

import classes from "./campaignSection.module.css";

import model from "../../../public/pics/model.png";
import mailIcon from "../../../public/icons/mail.svg";
import checkBox from "../../../public/icons/checkboxChecked.svg";

const CampaignForm = () => {
  return (
    <section className={`flex justify-center mt-10 ${classes.campForm}`}>
      <div className={`flex w-1360 borderRadius26 ${classes.campFormBg}`}>
        <div>
          <Image src={model} alt="tatilbudur" />
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex items-end h-1/6">
            <h1 className="poppins24">
              Üyelere özel indirimlere ve harika fiyatlara erişim sağlayın
            </h1>
          </div>
          <form className="flex flex-col justify-start h-3/6">
            <div className="flex">
              <div
                className={`flex flex-row items-center ${classes.inputArea}`}
              >
                <div className={`flex ml-4 ${classes.imageContainer}`}>
                  <Image
                    src={mailIcon}
                    alt="email"
                    className={classes.image}
                    width={16}
                    height={13}
                  />
                </div>
                <div className=" flex flex-col ml-3">
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
              <button
                className={`ml-8 poppins14 poppinsBold ${classes.button}`}
              >
                Gönder
              </button>
            </div>
            <div className="mt-5 flex">
              <Image src={checkBox} alt="onay kutusu" />
              <div className="w-1/2 ml-3">
                <span className="poppinsSemiBold">%50’ye varan </span>
                <span className="poppins14">
                  Fırsat ve Kampanyalardan haberdar olmak istiyorum
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CampaignForm;
