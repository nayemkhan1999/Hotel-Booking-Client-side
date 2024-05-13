import { Map, Marker } from "pigeon-maps";
const MapSection = () => {
  return (
    <div className="averia-serif">
      <h1 className="text-4xl text-gray-400 font-bold text-center mt-10">
        Hotel <span className="text-[teal]">Location</span>
      </h1>
      <div className="divider w-96 mx-auto lg:flex hidden"></div>
      <div className="mx-10 mt-10 ">
        <Map
          height={600}
          defaultCenter={[21.429109322139126, 91.97005959974331]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[21.429109322139126, 91.97005959974331]} />
        </Map>
      </div>
    </div>
  );
};

export default MapSection;
