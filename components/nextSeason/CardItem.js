import Image from "next/image";

import classes from "./nextSeason.module.css";

const CardItem = props => {
    return (
        <div className={`border borderRadiusSection ${classes.card}`}>
            <div>
                <Image src={props.img} alt={props.name}/>
            </div>
            <div>
                <h1>{props.name}</h1>
                <span>{props.type}</span>
            </div>
            <div>
                <p>{props.location}</p>
                <p><span>{props.price}</span></p>
            </div>
        </div>
    )
}

export default CardItem;