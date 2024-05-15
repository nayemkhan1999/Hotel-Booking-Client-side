import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ReviewUpdate = ({ hotel, userEmail, setUserEmail }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { image, date, price, size, roomName, _id, BDetails, id } = hotel;
  // console.log(hotel, "12 number line hotel");

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Update Successful");
  };
  const handleCancel = (_id, id2) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hotel-booking-blond-tau.vercel.app/booking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              //=======================UnAvailable Rooms update==================
              axios
                .patch(
                  `https://hotel-booking-blond-tau.vercel.app/unAvailableRooms/${id2}`,
                  {
                    availability: "Available",
                  }
                )
                .then((result) => {
                  // console.log(result.data);
                });
              Swal.fire({
                title: "Deleted!",
                text: "Your Destination has been deleted.",
                icon: "success",
              });
              const filterDelete = userEmail.filter(
                (deleteBook) => deleteBook._id !== _id
              );
              setUserEmail(filterDelete);
            }
          });
      }
    });
  };

  const handleReviews = (e) => {
    e.preventDefault();
    const userReview = e.target.review.value;
    // console.log(userReview);

    axios
      .patch(`https://hotel-booking-blond-tau.vercel.app/reviewUpdate/${id}`, {
        reviews: userReview,
      })
      .then((result) => {
        // console.log(result.data);
        toast.success("Your Review has been submit");
      });
  };
  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{roomName}</td>
        <td>${price}</td>
        <td>{size}</td>
        <td>{BDetails}</td>
        <td className="text-rose-500">
          <DatePicker
            className="p-2 rounded-md border text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </td>

        <td>
          <button
            onClick={handleUpdate}
            className="btn btn-xs bg-[teal] rounded-none text-white"
          >
            Update
          </button>
        </td>
        <td>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-xs bg-[#AF8C3E] rounded-none text-white"
            onClick={() => document.getElementById(_id).showModal()}
          >
            Review
          </button>
          <dialog id={_id} className="modal">
            <div className="modal-box w-96">
              <h3 className="font-bold text-lg">User Review!</h3>

              <form onSubmit={handleReviews}>
                <textarea
                  className="bg-gray-200 p-2 text-[#AF8C3E]"
                  id="message"
                  name="review"
                  rows="4"
                  cols="35"
                  placeholder="massage"
                ></textarea>

                <button className="py-2 px-32 bg-[#ca9c41] font-semibold  text-md  rounded-md text-white">
                  Submit
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-[teal]  text-white">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </td>
        <td>
          <button
            onClick={() => handleCancel(_id, id)}
            className="btn btn-xs bg-rose-600 rounded-none text-white"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReviewUpdate;
