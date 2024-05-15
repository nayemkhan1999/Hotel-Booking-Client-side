import one1 from "../../assets/one1.jpg";
import one2 from "../../assets/one2.png";
import one3 from "../../assets/one3.png";
import one4 from "../../assets/one4.png";
import one5 from "../../assets/one5.jpg";
import one6 from "../../assets/one6.png";
import one7 from "../../assets/one7.png";
import one8 from "../../assets/one8.png";
import one9 from "../../assets/onw9.jpg";
import one10 from "../../assets/one10.jpg";
import { Typewriter } from "react-simple-typewriter";
const SpecialOffer = () => {
  return (
    <div>
      <div className="averia-serif mt-10 lg:mx-10 mx-2">
        <section className="py-8 px-5 bg-gray-50 dark:text-gray-900 rounded-md ">
          <h1 className="lg:text-7xl text-3xl text-gray-400 font-bold text-center">
            <span className="text-7xl">Special</span>
            <span className="text-[teal]">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[" Offers"]}
              />
            </span>
          </h1>
          <div className="divider lg:w-96 mx-auto"></div>
          <div className="flex items-center justify-evenly">
            <img
              src="https://media.baamboozle.com/uploads/images/617956/1644947640_549743_gif-url.gif"
              alt=""
              className="h-80 "
            />
            <img
              src="https://i.giphy.com/sgTMINOA908LfcmUWh.webp"
              alt=""
              className="lg:flex hidden"
            />
          </div>
          <div className="container  grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            {/* ==========================Modal 01=================== */}
            <img
              onClick={() => document.getElementById("my_modal_1").showModal()}
              src={one1}
              alt="1"
              className="style w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 02=================== */}
            <img
              onClick={() => document.getElementById("my_modal_2").showModal()}
              alt="2"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one2}
            />
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 03=================== */}
            <img
              onClick={() => document.getElementById("my_modal_3").showModal()}
              alt="3"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one3}
            />
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 04=================== */}
            <img
              onClick={() => document.getElementById("my_modal_4").showModal()}
              alt="4"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one4}
            />
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 05=================== */}
            <img
              onClick={() => document.getElementById("my_modal_9").showModal()}
              alt="5"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one9}
            />
            <dialog id="my_modal_9" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one9})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 06=================== */}
            <img
              onClick={() => document.getElementById("my_modal_6").showModal()}
              alt="6"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one6}
            />
            <dialog id="my_modal_6" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one6})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 07=================== */}
            <img
              onClick={() => document.getElementById("my_modal_7").showModal()}
              alt="7"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one7}
            />
            <dialog id="my_modal_7" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one7})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 08=================== */}
            <img
              onClick={() => document.getElementById("my_modal_8").showModal()}
              alt="8"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one8}
            />
            <dialog id="my_modal_8" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one8})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 09=================== */}
            <img
              onClick={() => document.getElementById("my_modal_10").showModal()}
              alt="9"
              className="style w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={one10}
            />
            <dialog id="my_modal_10" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one10})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
            {/* ==========================Modal 10=================== */}
            <img
              onClick={() => document.getElementById("my_modal_5").showModal()}
              src={one5}
              alt="10"
              className="style w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "75vh",
                    borderRadius: "10px",
                  }}
                >
                  <h1 className="text-center text-white text-base pt-36">
                    <span className="text-xl text-[#ffa805fb] font-bold">
                      Special Offer:{" "}
                    </span>
                    <br />
                    Book now and save 20% on your next stay at <br /> our hotel
                    ! Limited time only.
                  </h1>
                </div>
              </div>
            </dialog>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecialOffer;
