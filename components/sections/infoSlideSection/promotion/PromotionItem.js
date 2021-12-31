import Image from "next/image";

import classes from "../infoSection.module.css";

const PromotionItem = (props) => {
  return (
    <div className="flex justify-between pl-8 h-40 border borderRadiusSection overflow-hidden">
      <div className="flex flex-col justify-center items-start">
        <h1 className={`flex justify-center ${classes.headerStyle}`}>
          {props.header}
        </h1>
        <button className={classes.buttonStyle}>
          <span className="whiteTone poppins12 px-4">Fırsatları Gör</span>
        </button>
      </div>  
        <Image src={props.pic} alt={props.alt} width={200} height={160} objectFit='cover'/>
    </div>
  );
};

export default PromotionItem;
