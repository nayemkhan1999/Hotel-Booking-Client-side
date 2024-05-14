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
    console.log(bookNow);

    // send data to server site
    fetch("http://localhost:5000/bookNow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookNow),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Book Now Complete Successfully");
        }
      });

    // ========================Handle ablale======================
    axios
      .patch(`http://localhost:5000/availableRooms/${_id}`, {
        availability: "Unavailable",
      })
      .then((result) => {
        console.log(result.data);
      });
  };

  return (
    <div className="mx-10 averia-serif">
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
            <h2 className="text-xl font-semibold tracking-wide text-gray-800 mt-2">
              <span className="text-gray-400 ">User Review: </span> {reviews}
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
    </div>
  );
};

export default RoomDetailsPage;
