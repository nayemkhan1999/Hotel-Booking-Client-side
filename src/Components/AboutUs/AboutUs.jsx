import { IoCheckmark } from "react-icons/io5";
import one from "../../assets/one.jpg";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  return (
    <div className="lg:mx-10 mx-2 averia-serif ">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div
        className="rounded-t-md"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${one})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1 className="lg:text-7xl text-3xl text-center font-bold text-gray-300 pt-20">
          About Us
        </h1>
        <p className="text-gray-200 tracking-widest ml-5 mb-2 text-sm">
          ALL OFFERS
        </p>
        <p className="text-gray-200 tracking-widest ml-5 lg:text-4xl text-2xl">
          Relax on Vacation
        </p>
        <div className="md:grid  md:grid-cols-4 lg:grid-cols-4 hidden ">
          {/* 01 */}
          <div className=" mt-8 ml-4">
            <span className="text-7xl  text-gray-400 ">1</span>
            <h1 className="text-2xl text-left text-gray-100 tracking-wider">
              Swimming Pool
            </h1>
            <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
              Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condim.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                In sit amet augue non dui
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
          {/* 02 */}
          <div className=" mt-8 ml-4">
            <span className="text-7xl  text-gray-400 ">2</span>
            <h1 className="text-2xl text-left text-gray-100 tracking-wider">
              Meeting Area
            </h1>
            <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
              Mauris vel quam vel felis maximus bibendum vel quis erat. Duis
              accumsan posuere.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                In sit amet augue non dui
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
          {/* 03 */}
          <div className=" mt-8 ml-4">
            <span className="text-7xl  text-gray-400 ">3</span>
            <h1 className="text-2xl text-left text-gray-100 tracking-wider">
              Mini CLub
            </h1>
            <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
              Phasellus mattis arcu ut ante hendrerit faucibus. Sed tristique
              justo sed nunc sagittis, nec.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                In sit amet augue non dui
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
          {/* 04 */}
          <div className=" mt-8 ml-4">
            <span className="text-7xl  text-gray-400 ">4</span>
            <h1 className="text-2xl text-left text-gray-100 tracking-wider">
              Indoor Gym
            </h1>
            <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
              Vivamus quis interdum neque. Aenean convallis urna at sapien
              dignissim, quis fringilla ipsum.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                In sit amet augue non dui
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <IoCheckmark />
              </span>
              <p className="text-sm text-gray-200 text-left mt-2 opacity-80">
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
