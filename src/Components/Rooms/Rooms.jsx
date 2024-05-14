import { useLoaderData } from "react-router-dom";
import RoomsCard from "../RoomsCard/RoomsCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Rooms = () => {
  const rooms = useLoaderData();
  const [roomPage, setRoomPage] = useState([]);
  useEffect(() => {
    setRoomPage(rooms);
  }, [rooms]);
  const handleSort = (criteria) => {
    const sorted = [...roomPage].sort((a, b) => {
      if (criteria === "asc") {
        return a.price_per_night - b.price_per_night;
      } else if (criteria === "desc") {
        return b.price_per_night - a.price_per_night;
      }
    });
    setRoomPage(sorted);
  };
  return (
    <div className="lg:mx-10 mx-2 averia-serif">
      <Helmet>
        <title>Hotel | Rooms</title>
      </Helmet>

      <select
        className="border-2 border-gray-200 px-6 py-3 my-4 font-semibold text-lg"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option className="font-semibold" value="asc">
          Ascending Price
        </option>
        <option className="font-semibold" value="desc">
          Descending Price
        </option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomPage.map((RC) => (
          <RoomsCard key={RC._is} RC={RC}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
