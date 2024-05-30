import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ImSpinner, ImSpinner3, ImSpinner6 } from "react-icons/im";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddRoms = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  // const { loading, setLoading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  // const handleClick = () => {
  //   setIsLoading(!isLoading);
  // };
  const onSubmit = async (data) => {
    setIsLoading(!isLoading);
    console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.room_images[0] };
    console.log(imageFile);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const addRoom = {
        name: data.name,
        availability: data.availability,
        price_per_night: parseFloat(data.price_per_night),
        room_images: res.data.data.display_url,
        description: data.description,
        room_size: data.room_size,
        special_offers: data.special_offers,
        booking_dates: data.booking_dates,
      };
      //
      const room = await axiosPublic.post("/addedRoom", addRoom);
      console.log(room.data);
      if (room.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you! Your room is added successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className="lg:mx-10 mx-2 averia-serif">
      <Helmet>
        <title>Hotel | Add Rooms</title>
      </Helmet>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text">Room Name</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          {/* Category And Price */}
          <div className="flex gap-6 my-4">
            {/* category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <select
                defaultValue="Available"
                {...register("availability", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="Available">
                  Select a category
                </option>
                <option value="Available">Available</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price per night</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price_per_night", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Room Size And Special Offer */}
          <div className="flex gap-6 my-4">
            {/* Room Size */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Room Size</span>
              </label>
              <input
                type="number"
                placeholder="Room Size"
                {...register("room_size", { required: true })}
                className="input input-bordered w-full"
              ></input>
            </div>
            {/* Special Offers */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Special Offers</span>
              </label>
              <input
                type="text"
                placeholder="Special Offers"
                {...register("special_offers", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Room Image And Booking Date */}
          <div className="flex gap-6 my-4">
            {/* Image */}
            <div className="form-control  w-full  ">
              <label className="label">
                <span className="label-text">Room Image</span>
              </label>
              <input
                {...register("room_images", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            {/* Booking Date */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Booking Dates</span>
              </label>
              <input
                type="date"
                placeholder="Booking Date"
                {...register("booking_dates", { required: true })}
                className="input input-bordered w-full  text-[#d8b15d]"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="description"
            ></textarea>
          </div>
          <button
            // onClick={handleClick}
            disabled={isLoading}
            className="btn bg-[teal] text-[#eebb4d] w-full mt-4 "
          >
            {isLoading ? (
              <ImSpinner6 className="animate-spin text-3xl text-yellow-500" />
            ) : (
              "Add Rooms"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoms;
