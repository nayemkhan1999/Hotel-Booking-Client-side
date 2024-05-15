import { useLoaderData } from "react-router-dom";
import FRoomCard from "../FRoomCard/FRoomCard";
import { Typewriter } from "react-simple-typewriter";

const FeaturedRooms = () => {
  const room = useLoaderData();
  // console.log(room, "5number line");
  return (
    <div className="">
      <h2 className="text-4xl text-gray-400 font-bold text-center mt-10">
        <span className="text-5xl">F</span>
        <span className="text-[teal]">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["eatured Rooms"]}
          />
        </span>
      </h2>
      <div className="divider w-96 mx-auto lg:flex hidden"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {room.map((HB) => (
          <FRoomCard key={HB._id} HB={HB}></FRoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
