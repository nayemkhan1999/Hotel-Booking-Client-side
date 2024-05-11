import { NavLink } from "react-router-dom";

const RoomsCard = ({ RC }) => {
  const { _id, name, price_per_night, room_images, availability } = RC;
  return (
    <div className="mx-10 mt-10 averia-serif">
      <NavLink to={`/roomsDetailsPage/${_id}`}>
        <div className="max-w-xs h-[85vh] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <img
            src={room_images}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2 flex justify-between">
            <p>Price:</p>
            <span className="block text-xs  float-end font-medium tracking-widest uppercase dark:text-violet-600">
              ${price_per_night}
            </span>
          </div>
          <h2 className="text-xl font-semibold tracking-wide mb-5">{name}</h2>
          <p className="float-end  text-sm font-semibold text-[#d6a947]">
            {availability}
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default RoomsCard;
