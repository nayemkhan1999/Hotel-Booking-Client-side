const FRoomCard = ({ HB }) => {
  const { room_name, image_url, description } = HB;
  return (
    <div className="averia-serif lg:mx-10 mx-2">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image_url}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1000"
              className="text-3xl font-semibold tracking-wide"
            >
              {room_name}
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="1300"
              data-aos-duration="1500"
              className="dark:text-gray-800"
            >
              {description}
            </p>
          </div>
          <button
            data-aos="fade-right"
            data-aos-delay="1500"
            data-aos-duration="2000"
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
