import Image from "next/image";

import classes from "./promo.module.css";

const PromoBox = (props) => {
  return (
    <div className="flex w-96 h-40 border borderRadiusSection overflow-hidden">
      <div className="flex flex-col justify-center w-4/6 items-start pl-6">
        <h1 className={`flex justify-center ${classes.headerStyle}`}>
          {props.header}
        </h1>
        <button className={classes.buttonStyle}>
          <span className="whiteTone poppin12 px-4">Fırsatları Gör</span>
        </button>
      </div>  
        <Image src={props.pic} alt="kus adasi" height={160} objectFit='cover'/>
    </div>
  );
};

export default PromoBox;
