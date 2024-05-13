import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyBookingPage = () => {
  // const booking = useLoaderData();
  // console.log(booking, "5 number line booking");
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:5000/booking_email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserEmail(data);
      });
  }, [user?.email]);
  console.log(userEmail);

  const handleCancel = (_id) => {
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
        fetch(`http://localhost:5000/booking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
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
  return (
    <div className="averia-serif mx-10">
      <h1 className="text-4xl text-center">
        This is Booking Data:{userEmail.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Room Name</th>
              <th>Price Per Night</th>
              <th>Room Size</th>
              <th>Booking Date</th>
              <th>Update Date</th>
              <th className="tracking-widest">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userEmail.map((hotel) => (
              <tr key={hotel._id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={hotel?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{hotel.roomName}</td>
                <td>${hotel.price}</td>
                <td>{hotel.size}</td>
                <td>{hotel.BDetails}</td>
                <td className="text-rose-500">
                  <DatePicker
                    className="p-2 rounded-md"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </td>
                <td>
                  <button className="btn btn-xs bg-[teal] rounded-none text-white">
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleCancel(hotel._id)}
                    className="btn btn-xs bg-rose-600 rounded-none text-white"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingPage;
