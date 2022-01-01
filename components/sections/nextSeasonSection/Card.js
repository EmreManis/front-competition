import CardItem from "./CardItem";

import { dummyData } from "../../../data/dummyData";

const Card = () => {
  return (
    <div className="flex justify-between pt-7 md:pt-10 itemsMedia">
      {dummyData.map((object, id) => {
        return (
          <CardItem 
          key={id} 
          img={object.img} 
          name={object.name} 
          type={object.type}
          location={object.location}
          price={object.price}/>
        );
      })}
    </div>
  );
};

export default Card;
