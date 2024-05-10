const FRoomCard = ({ HB }) => {
  const { room_name, image_url, description } = HB;
  return (
    <div className="averia-serif mx-10">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image_url}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {room_name}
            </h2>
            <p className="dark:text-gray-800">{description}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[teal] dark:text-gray-50"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FRoomCard;
