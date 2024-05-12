import { useLoaderData } from "react-router-dom";

const RoomDetailsPage = () => {
  const views = useLoaderData();
  const {
    description,
    room_images,
    room_size,
    price_per_night,
    availability,
    special_offers,
    booking_dates,
    name,
  } = views;
  return (
    <div className="mx-10 averia-serif">
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row relative">
          <img
            src={room_images}
            className="w-full h-96 rounded-lg shadow-2xl "
          />
          <div className="bg-[teal]  w-16 h-7 absolute top-[25px]   ">
            <h1 className="text-[#f7c456] text-center font-bold  tracking-wide">
              ${price_per_night}
            </h1>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-wide text-[#eebb4d] mb-4">
              {availability}
            </h2>
            <h2 className="text-4xl font-semibold tracking-wide text-gray-400 mb-3">
              {name}
            </h2>
            <h2 className="text-xl font-semibold tracking-wide text-gray-800 mt-2">
              {room_size}
            </h2>
            <h2 className="text-xl font-semibold tracking-wide text-gray-800 mt-2">
              <span className="text-gray-400 ">OFFER%</span> {special_offers}
            </h2>
            <p className="py-6 opacity-80">{description}</p>
            <button className="btn bg-[teal] w-full text-lg mt-4 tracking-wider text-[#eebb4d]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
