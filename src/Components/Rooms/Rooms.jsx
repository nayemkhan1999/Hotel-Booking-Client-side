import { useLoaderData } from "react-router-dom";
import RoomsCard from "../RoomsCard/RoomsCard";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  const rooms = useLoaderData();
  return (
    <div className="lg:mx-10 mx-2 averia-serif">
      <Helmet>
        <title>Hotel | Rooms</title>
      </Helmet>
      <select className="border-2  font-semibold p-4 ">
        <option className="font-semibold text-gray-400" value="">
          Filter By Price
        </option>
        <option className="font-semibold text-gray-400" value="">
          Descending Order
        </option>
        <option className="font-semibold text-gray-400" value="">
          Ascending Order
        </option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((RC) => (
          <RoomsCard key={RC._is} RC={RC}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
