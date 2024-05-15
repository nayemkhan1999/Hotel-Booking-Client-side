import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
const RoomDetailsPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
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
    _id,
    reviews,
  } = views || {};

  const handlePost = (e) => {
    e.preventDefault();

    const date = startDate;
    const image = room_images;
    const price = price_per_night;
    const size = room_size;
    const BDetails = booking_dates;
    const roomName = name;
    const id = _id;
    const UserEmail = user?.email;
    const bookNow = {
      date,
      image,
      id,
      UserEmail,
      roomName,
      price,
      size,
      BDetails,
    };
    // console.log(bookNow);

    // send data to server site
    fetch("https://hotel-booking-blond-tau.vercel.app/bookNow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookNow),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Book Now Complete Successfully");
        }
      });

    // ======================= AvailableRooms Update ================================
    axios
      .patch(
        `https://hotel-booking-blond-tau.vercel.app/availableRooms/${_id}`,
        {
          availability: "Unavailable",
        }
      )
      .then((result) => {
        // console.log(result.data);
      });
  };

  return (
    <div className="mx-10  averia-serif">
      <Helmet>
        <title>Rooms Details</title>
      </Helmet>
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
              <span className="text-gray-400 ">OFFER% </span> {special_offers}
            </h2>
            <p className="py-6 opacity-80">{description}</p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-[teal] w-full text-lg mt-4 tracking-wider text-[#eebb4d]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Now
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box relative bg-gray-800">
                <img
                  src={room_images}
                  className="w-full h-56 rounded-lg shadow-2xl "
                />
                <div className="bg-[teal]  w-16 h-7 absolute top-[35px]  left-[400px] ">
                  <h1 className="text-[#f7c456] text-center font-bold  tracking-wide">
                    ${price_per_night}
                  </h1>
                </div>

                <h2 className="text-xl font-semibold tracking-wide text-[#eebb4d] mb-4">
                  {availability}
                </h2>
                {/* DatePicker */}
                <p className="text-sm text-[#eebb4d] font-medium">
                  Select Date
                </p>

                <form onSubmit={handlePost}>
                  <DatePicker
                    className="p-2 rounded-md"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <button className="btn w-full tracking-widest font-semibold btn-md mt-4 border-none rounded-md bg-[teal] text-[#eebb4d]">
                    CONFIRM
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-[teal] text-[#eebb4d]">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* ===============User Review===================== */}
      <div className="container mt-4 flex flex-col w-full max-w-lg p-6 mb-2 mx-auto divide-y rounded-md dark:divide-gray-300 bg-[#111827] text-white">
        <div className="lg:flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{user.displayName}</h4>
              <span className="text-xs  text-white">{user.email}</span>
            </div>
          </div>

          <div>
            <h1 className="text-xs">Booking date</h1>
            <span className="text-lg font-bold text-white">
              {booking_dates}
            </span>
          </div>
        </div>
        {/* ===============Rating============== */}
        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2 mx-auto">
          <div className="flex">
            <button
              type="button"
              title="Rate 1 stars"
              aria-label="Rate 1 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 dark:text-[#EAB308]"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 2 stars"
              aria-label="Rate 2 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 dark:text-[#EAB308]"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 3 stars"
              aria-label="Rate 3 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 dark:text-[#EAB308]"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 4 stars"
              aria-label="Rate 4 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 dark:text-gray-400"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 5 stars"
              aria-label="Rate 5 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 dark:text-gray-400"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
          </div>
          <span className="text-white">3 out of 5</span>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
          <p className="text-white">{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
