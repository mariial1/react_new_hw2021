import Geo from "../geo/Geo";

export default function Address({address: {city,street,geo}}) {
  return (
    <div>
    City - {city}, street - {street}
      <Geo location={geo}/>
    </div>
  );
}
