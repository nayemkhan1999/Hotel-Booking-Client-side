import { NavLink } from "react-router-dom";
import logo from "../../assets/hotel.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [showEmail, setShowEmail] = useState(false);
  const { displayName, photoURL, email } = user || {};

  const handleLogOut = () => {
    logOutUser().then((result) => {
      console.log(result, "log out successfully").catch((error) => {
        console.log(error);
      });
    });
  };
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#ffae4c]" : "text-[#363f4d] "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#ffae4c] " : "text-[#363f4d]"
          }
          to="/rooms"
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#ffae4c]" : "text-[#363f4d] "
          }
          to="/bookings"
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#ffae4c]" : "text-[#363f4d] "
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="averia-serif mx-10">
      <div className="navbar bg-base-100  shadow-md rounded-b-lg px-5 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10]  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <p className="font-bold lg:text-4xl text-xl  text-gray-400">
            <span className="lg:text-5xl text-4xl text-[teal]">H</span>
            otel
          </p>
          <img
            className="w-10 h-10 lg:flex hidden"
            src="https://cdn-icons-png.flaticon.com/128/3310/3310553.png"
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal text-gray-400  font-[averia-serif] font-bold px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div>
                <div
                  onMouseLeave={() => setShowEmail(false)}
                  onMouseEnter={() => setShowEmail(true)}
                  className="avatar relative"
                >
                  <div className="lg:w-9 md:w-9 rounded-full ring-2  ring-teal-600 mr-5 ">
                    <img
                      className="lg:block md:block hidden"
                      src={
                        user?.photoURL ||
                        "https://cdn-icons-png.flaticon.com/128/15735/15735369.png"
                      }
                    />
                  </div>
                </div>
                <div className={`${showEmail ? "flex" : "hidden"}`}>
                  <div className="bg-gray-400 opacity-80 lg:w-[250px] rounded-md text-white absolute z-10 right-[230px] top-[70px]">
                    <div className="p-4 font-semibold">
                      <h1>{displayName || "Not found"}</h1>
                      <h1>{email || "Not Found"}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="lg:px-6 px-2 lg:py-3 py-2 rounded-md  text-[teal] bg-gray-200 font-bold"
              >
                LogOUT
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="lg:px-6 px-2 lg:py-3 py-2 rounded-md  text-[teal] bg-gray-200 font-bold"
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
