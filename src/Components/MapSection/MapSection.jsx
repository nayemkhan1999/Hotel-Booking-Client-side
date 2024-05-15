import { Map, Marker } from "pigeon-maps";
import { Typewriter } from "react-simple-typewriter";
const MapSection = () => {
  return (
    <div className="averia-serif">
      <h1 className="text-4xl text-gray-400 font-bold text-center mt-10">
        <span className="text-5xl">H</span>
        <span className="text-[teal]">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["otel Location"]}
          />
        </span>
      </h1>
      <div className="divider w-96 mx-auto lg:flex hidden"></div>
      <div className="lg:mx-10 mx-2 mt-10 ">
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
