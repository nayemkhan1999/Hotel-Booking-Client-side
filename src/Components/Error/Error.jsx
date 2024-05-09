import { Link } from "react-router-dom";
import error from "../../assets/notFound (2).gif";
import { HiChevronDoubleLeft } from "react-icons/hi2";
const Error = () => {
  return (
    <div className="text-center mx-auto">
      <img
        className="w-[1240px] h-[500px] mx-auto text-center"
        src={error}
        alt=""
      />
      <Link to="/">
        <button className="bg-[#ddd] btn w-full text-gray-500 font-black text-lg">
          <span className="font-bold text-2xl">
            <HiChevronDoubleLeft />
          </span>{" "}
          GO TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
