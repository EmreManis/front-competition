import CardItem from "./CardItem";
import { dummyHotelData } from "../../../data/dummyHotelData";

const Card = (props) => {
  console.log(dummyHotelData);
  let cardItem0 = dummyHotelData.map((hotel, id) => {
    return (
      <CardItem
        key={id}
        img={hotel.img}
        name={hotel.name}
        type={hotel.type}
        location={hotel.location}
        price={hotel.price}
      />
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
        price={hotel.price}
      />
    );
  });


  let newArr = dummyHotelData.slice(2, 4);
  let newArr2 = dummyHotelData.slice(0, 2);
  let mixedArr = newArr.concat(newArr2);
  let cardItem2 = mixedArr.sort().map((hotel, id) => {
    return (
      <CardItem
        key={id}
        img={hotel.img}
        name={hotel.name}
        type={hotel.type}
        location={hotel.location}
        price={hotel.price}
      />
    );
  });

  let activeCard;
  switch (props.activeMenuId) {
    case 0:
      activeCard = cardItem0;
      break;
    case 1:
      activeCard = cardItem1;
      break;
    case 2:
      activeCard = cardItem2;
      break;
  }

  return (
    <div className="flex justify-between pt-7 md:pt-10 itemsMedia">
      {activeCard}
    </div>
  );
};

export default Card;
