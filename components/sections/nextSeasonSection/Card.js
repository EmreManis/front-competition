import CardItem from "./CardItem";

import { dummyHotelData } from "../../../data/dummyHotelData";

const Card = () => {
  return (
    <div className="flex justify-between pt-7 md:pt-10 itemsMedia">
      {dummyHotelData.map((hotel, id) => {
        return (
          <CardItem 
          key={id} 
          img={hotel.img} 
          name={hotel.name} 
          type={hotel.type}
          location={hotel.location}
          price={hotel.price}/>
        );
      })}
    </div>
  );
};

export default Card;
