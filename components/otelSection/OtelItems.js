import classes from "./otelSection.module.css";

import pic1 from "../../public/otel/pic1.png"
import pic2 from "../../public/otel/pic2.png"
import pic3 from "../../public/otel/pic3.png"
import pic4 from "../../public/otel/pic4.png"
import pic5 from "../../public/otel/pic5.png"

const otelCard = [
    {
        name: "Kayak Otelleri",
        number: 2243,
        pic: pic1
    },
    {
        name: "Termal Otelleri",
        number: 2243,
        pic: pic2
    },
    {
        name: "Yetişkin Otelleri",
        number: 2243,
        pic: pic3
    },
    {
        name: "Çocuk Dostu Oteller",
        number: 2243,
        pic: pic4
    },
    {
        name: "Denize Sıfır Oteller",
        number: 2243,
        pic: pic5
    },
];

const OtelItems = () => {
    return (
        
    
                otelCard.map(i => {
                    return (
                        <div className={`flex border borderRadiusSection ${classes.otelItems}`}>
                        <div style={{backgroundImage: `url("../../public/otel/pic1.png")`}}>
              
                        </div>
                        </div>
                    )
                })
          
    )
}

export default OtelItems;