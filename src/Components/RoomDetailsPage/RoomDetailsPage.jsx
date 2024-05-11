import { useLoaderData } from "react-router-dom";

const RoomDetailsPage = () => {
  const views = useLoaderData();
  console.log(views, "5 number line views");
  return (
    <div>
      <h1 className="text-4xl">Room Details page</h1>
    </div>
  );
};

export default RoomDetailsPage;
