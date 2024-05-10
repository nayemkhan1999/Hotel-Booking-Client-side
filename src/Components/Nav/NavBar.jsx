import { NavLink } from "react-router-dom";
import logo from "../../assets/hotel.png";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">My Bookings</NavLink>
      </li>
    </>
  );

  return (
    <div className="averia-serif">
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <h1 className="font-bold lg:text-4xl text-xl  text-gray-400 ml-10">
            <span className="lg:text-5xl text-4xl text-orange-500">H</span>otel
            Booking
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/login"
            className="px-6 py-3 rounded-md lg:block md:block hidden text-orange-500 bg-gray-200 font-bold mr-10"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
