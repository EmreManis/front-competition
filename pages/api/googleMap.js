const {Client} = require("@googlemaps/google-maps-services-js");

const key = process.env.GOOGLE_MAP_API_KEY;

export default async function handler(req, res) {
  const client = new Client({});

  client
  .placeAutocomplete({
    params: {
      location:{ lat: 38.9637, lng: 35.2433 },
      radius:100,
      types: "(cities)",
      key: key,
      input: "ant",
      language: "tr",
      components: ["country:tr"]
    },
    timeout: 1000 // milliseconds
  })
  .then(r => {
    res.json(r.data);
  })
  .catch(e => {
    res.json(e);
  });

  // client
  // .placesNearby(
  //   {
  //     params: {
  //       locations: [{ lat: 38.9637, lng: 35.2433}],
  //       key: key,
  //       type: "lodging"
  //     },
  //     timeout: 1000, 
  //   }
  // )
  // .then(r => {
  //   res.json(r.data);
  // })
  // .catch((e) => {
  //   res.json(e);
  // });

}
