import Image from "next/image";

import classes from "./promoForm.module.css";

import model from "../../public/pics/model.png";
import mailIcon from "../../public/icons/mail.png";
import checkBox from "../../public/icons/checkboxChecked.svg";

const PromoForm = () => {
  return (
    <section
      className={`flex justify-center mt-10 ${classes.promoForm}`}
    >
      <div className={`flex width1360 borderRadius26 ${classes.promoFormBg}`}>
        <div>
          <Image src={model} alt="tatilbudur" />
        </div>
        <div className="flex flex-col">
          <h1>Üyelere özel indirimlere ve harika fiyatlara erişim sağlayın</h1>
          <form>
            <div>
              <Image src={mailIcon} alt="email" />
              <input type="email" value="" />
            </div>
            <div>
              <Image src={checkBox} alt="onay kutusu" />
              <span className="poppinsSemiBold">%50’ye varan </span>
              <span>Fırsat ve Kampanyalardan haberdar olmak istiyorum</span>
            </div>
            <button>Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PromoForm;

