import Image from "next/image";

import classes from "./nextSeason.module.css";

const CardItem = (props) => {
  return (
    <div
      className={`overflow-hidden border borderRadiusSection ${classes.whiteBg} ${classes.card}`}
    >  
        <Image src={props.img} alt={props.name} width={280} height={160}/>
      <div className="ml-5 mx-3">
        <h1 className="poppins16">{props.name}</h1>
        <div className={`flex justify-center items-center ${classes.type}`}>
          <span className={`poppinsSemiBold poppins10 `}>{props.type}</span>
        </div>
      </div>
      <div className="ml-5 flex items-end">
        <p
          className={`poppinsRegular poppins12 basis-2/4 ${classes.cardLocation}`}
        >
          {props.location}
        </p>
        <div className="flex flex-col mt-4">
          <div>
            <span className="blue115 poppins20 poppinsSemiBold">
              {props.price}
            </span>
            <span className="blue115 poppins14"> ₺</span>
            <span className="poppins10">`den</span>
          </div>
          <span className="poppins10"> başlayan fiyatlarla </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
