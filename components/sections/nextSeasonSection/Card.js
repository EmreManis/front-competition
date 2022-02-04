import { useState } from "react";

import CardItem from "./CardItem"; 
import { dummyHotelData } from "../../../data/dummyHotelData";

const Card = (props) => {


  let cardItem0 = dummyHotelData.map((hotel, id) => {
    return (
      <CardItem 
      key={id} 
      img={hotel.img} 
      name={hotel.name} 
      type={hotel.type}
      location={hotel.location}
      price={hotel.price}/>
    );
  });

  let cardItem1 = dummyHotelData.reverse().map((hotel, id) => {
    return (
      <CardItem 
      key={id} 
      img={hotel.img} 
      name={hotel.name} 
      type={hotel.type}
      location={hotel.location}
      price={hotel.price}/>
    );
  });

  let cardItem2 = dummyHotelData.reverse().map((hotel, id) => {
    return (
      <CardItem 
      key={id} 
      img={hotel.img} 
      name={hotel.name} 
      type={hotel.type}
      location={hotel.location}
      price={hotel.price}/>
    );
  });

  let activeCard;
  switch(props.activeMenuId){
    case 0: 
    activeCard = cardItem0
    break;
    case 1: 
    activeCard = cardItem1
    break;
  }
  
  return (
    <div className="flex justify-between pt-7 md:pt-10 itemsMedia">
      {activeCard}
      {/* {dummyHotelData.map((hotel, id) => {
        return (
          <CardItem 
          key={id} 
          img={hotel.img} 
          name={hotel.name} 
          type={hotel.type}
          location={hotel.location}
          price={hotel.price}/>
        );
      })} */}
    </div>
  );
};

export default Card;
