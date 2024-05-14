import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ReviewUpdate from "../ReviewUpdate/ReviewUpdate";
import { Helmet } from "react-helmet-async";

const MyBookingPage = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking_email/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUserEmail(data);
      });
  }, [user?.email]);
  // console.log(userEmail);

  return (
    <div className="averia-serif mx-10">
      <Helmet>
        <title>My Bookings</title>
      </Helmet>
      <h1 className="lg:text-4xl text-3xl text-gray-400 font-bold text-center">
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
              <th></th>
              <th>Update Date</th>
              <th>User Review</th>
              <th>Booking Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userEmail.map((hotel) => (
              <ReviewUpdate
                key={hotel._id}
                hotel={hotel}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
              ></ReviewUpdate>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingPage;
