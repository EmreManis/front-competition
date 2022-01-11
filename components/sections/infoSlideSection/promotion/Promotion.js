import PromotionItem from "./PromotionItem";

import classes from "../infoSection.module.css";

import balonPic from "../../../../public/balon.webp";
import clarisseMeyer from "../../../../public/clarisseMeyer.jpg";

const Promo = () => {
    return (
        <div className={`hidden md:flex flex-col justify-between ${classes.promo}`}>
            <PromotionItem  header="Yılbaşına Özel Kültür Turlarını Keşfedin!" pic={balonPic} alt="kus adasi"/>
            <PromotionItem  header="Kış Tatili için Hazırlanın!" pic={clarisseMeyer} alt="clarisse meyer"/>
        </div>
    )
}

export default Promo;