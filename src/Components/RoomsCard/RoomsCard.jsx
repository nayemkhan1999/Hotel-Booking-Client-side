import { NavLink } from "react-router-dom";

const RoomsCard = ({ RC }) => {
  const { _id, name, price_per_night, room_images, availability, description } =
    RC || {};
  return (
    <div className="mx-10 mt-10 averia-serif">
      <NavLink to={`/roomsDetailsPage/${_id}`}>
        <div className="max-w-xs relative lg:h-[75vh] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={room_images}
            alt=""
            className="object-cover  object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="bg-[teal]  w-16 h-7 absolute lg:top-[10px] top-[5px] lg:left-[240px] left-[90px] ">
            <h1 className="text-[#f7c456] text-center font-bold  tracking-wide">
              ${price_per_night}
            </h1>
          </div>
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="lg:text-xl font-semibold tracking-wide text-[#eebb4d]">
                {availability}
              </h2>
              <h2 className="lg:text-2xl  font-semibold tracking-wide text-gray-400">
                {name}
              </h2>
              <p className="dark:text-gray-800 opacity-75 lg:text-sm text-xs ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default RoomsCard;
