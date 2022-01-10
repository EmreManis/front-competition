import React, { useState } from "react";

import classes from "../searchSection.module.css";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const searchOptions = {
  componentRestrictions: { country: ["tr"] },
  types: ["(cities)"],
};

const LocationAutoComplete = (props) => {
  // const [address, setAdress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    props.addressHandler(value);
    setCoordinates(latLng);
  };

//   const handleChange = address => {
//     setAdress(address);
//   };

// console.log(address)

  return (
    <div className="w-full cyanTone flex items-center justify-center ml-1">
      <PlacesAutocomplete
        value={props.address}
        searchOptions={searchOptions}
        onChange={(value) =>props.addressHandler(value)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div className="relative">
              <input
                {...getInputProps({
                  placeholder: "Otel, Şehir, Bölge veya Tema Adı",
                })}
              />
              <div className={`${classes.popPosition} absolute w-96 z-10 borderRadius overflow-hidden`} >
                {loading ? <div className="px-2">...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "py-4 px-2 flex flex-col suggestion-item--active"
                    : "py-4 px-2 flex flex-col suggestion-item";
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span className="poppins14">
                        {suggestion.formattedSuggestion.mainText}
                      </span>
                      <span className="poppins10">
                        {suggestion.formattedSuggestion.secondaryText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationAutoComplete;
