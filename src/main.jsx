import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Error from "./Components/Error/Error.jsx";
import Login from "./Components/Login/Login.jsx";
import Rooms from "./Components/Rooms/Rooms.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import Register from "./Components/Register/Register.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import RoomDetailsPage from "./Components/RoomDetailsPage/RoomDetailsPage.jsx";
import MyBookingPage from "./Components/MyBookingPage/MyBookingPage.jsx";
import { Toaster } from "react-hot-toast";
import PrivetRout from "./Components/PrivetRout/PrivetRout.jsx";
import { HelmetProvider } from "react-helmet-async";
import AddRoms from "./Components/AddRoms/AddRoms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://hotel-booking-blond-tau.vercel.app/featuresRoom"),
      },
      {
        path: "/rooms",
        element: (
          <PrivetRout>
            <Rooms />
          </PrivetRout>
        ),
        loader: () => fetch("https://hotel-booking-blond-tau.vercel.app/rooms"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/bookings",
        element: (
          <PrivetRout>
            <MyBookingPage />
          </PrivetRout>
        ),
      },
      {
        path: "/addRooms",
        element: (
          <PrivetRout>
            <AddRoms />
          </PrivetRout>
        ),
      },
      {
        path: "/roomsDetailsPage/:id",
        element: <RoomDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-blond-tau.vercel.app/roomsDetails/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
