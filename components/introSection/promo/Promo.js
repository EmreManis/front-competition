import PromoItem from "./PromoItem";

import classes from "./promo.module.css";

import balonPic from "../../../public/balon.png";
import clarisseMeyer from "../../../public/clarisseMeyer.png";

const Promo = () => {
    return (
        <div className={`flex flex-col justify-between ${classes.promo}`}>
            <PromoItem  header="Yılbaşına Özel Kültür Turlarını Keşfedin!" pic={balonPic} alt="kus adasi"/>
            <PromoItem  header="Kış Tatili için Hazırlanın!" pic={clarisseMeyer} alt="clarisse meyer"/>
        </div>
    )
}

export default Promo;