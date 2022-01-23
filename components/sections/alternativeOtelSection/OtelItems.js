import classes from "./otelSection.module.css";
import Image from "next/image";

import forwardArrow from "../../../public/carousel/forwardArrowWhite.svg";

const otelCard = [
  {
    name: "Kayak Otelleri",
    number: 2243,
    pic: "./otel/kayak__2243.png",
  },
  {
    name: "Termal Otelleri",
    number: 2243,
    pic: "./otel/termal__2243.png",
  },
  {
    name: "Yetişkin Otelleri",
    number: 2243,
    pic: "./otel/yetiskin__2243.png",
  },
  {
    name: "Çocuk Dostu Oteller",
    number: 2243,
    pic: "./otel/cocuk_dostu_2243.png",
  },
  {
    name: "Denize Sıfır Oteller",
    number: 2243,
    pic: "./otel/denize_sıfır_2243.png",
  },
];

const OtelItems = () => {
  return (
    <div className="flex justify-between mt-9 itemsMedia">
      {otelCard.map((i, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col pl-3 pb-6 justify-end border borderRadiusSection ${classes.otelItems}`}
            style={{ backgroundImage: `url(${i.pic})` }}
          >
            <h2 className="whiteTone">{i.name}</h2>
            <span className="whiteTone">{i.number} Otel</span>
          </div>
        );
      })}
      <div
        className={`flex flex-col pl-3  items-center justify-center border borderRadiusSection ${classes.otelItems} ${classes.tumunuGor}`}
      > 
        <Image src={forwardArrow} width={22} height={14} alt="forward"/>
        <h2 className="whiteTone mt-6">Tümünü Gör</h2>
      </div>
    </div>
  );
};

export default OtelItems;
