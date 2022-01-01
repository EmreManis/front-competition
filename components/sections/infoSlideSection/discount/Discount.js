import Image from "next/image";

import classes from "../infoSection.module.css";

import calendarDays from "../../../../public/icons/calendar-days.svg";
import moonStars from "../../../../public/icons/moon-stars.svg";
import personSkiing from "../../../../public/icons/person-skiing.svg";

const Discount = () => {
  return (
    <div className="md:flex justify-center">
      <div className="flex flex-col md:widthSearch">
        <div className="flex justify-between">
          <div
            className={`flex items-center justify-between border borderRadiusSection px-8 ${classes.discountItem}`}
          >
            <h1 className="poppins14 w-3/5">
              Şimdi Al, <b>4 Ay Sonra</b> Ödemeye Başla
            </h1>
            <div>
              <Image
                src={calendarDays}
                alt="4 Ay Sonra ode"
                width={45}
                height={38}
              />
            </div>
          </div>
          <div
            className={`flex items-center justify-between border borderRadiusSection px-8 ${classes.discountItem}`}
          >
            <h1 className="poppins14 w-9/12">
              2 Gece ve Üstü Konaklamalarda <b>+1 Gece Ücretsiz</b>
            </h1>
            <div>
              <Image
                src={moonStars}
                alt="+1 Gece Ücretsiz"
                width={45}
                height={38}
              />
            </div>
          </div>
          <div
            className={`flex items-center border borderRadiusSection px-8 ${classes.discountItem}`}
          >
            <h1 className={`poppins14 ${classes.discLast}`}>
              Kayak Otellerinde <b>%45’e Varan</b> Erken Fırsatı!
            </h1>
            <h1 className="poppins14">Rezervasyon</h1>
            <div className="justify-self-end ml-10">
              <Image
                src={personSkiing}
                alt="Erken Rezervasyon indirim"
                width={38}
                height={38}
              />
            </div>
          </div>
        </div>
        <h1 className="flex justify-items-start poppins10 mt-1.5 ml-5">
          Maximum karta özel 4 ay erteleme
        </h1>
      </div>
    </div>
  );
};

export default Discount;
