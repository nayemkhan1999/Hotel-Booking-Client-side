import { useContext } from "react";
import taxi from "../../assets/taxi-app.gif";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Newsletter = () => {
  const { user } = useContext(AuthContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    Swal.fire({
      title:
        "Welcome to our website! You will be notified of upcoming offers via email.",
      width: 600,
      padding: "3em",
      color: "#42505f",
      background: "#fff url(/images/trees.png)",
      backdrop: `
      rgba(82, 154, 150, 0.38)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };
  return (
    <div className="averia-serif mt-10 lg:mx-10 mx-2">
      <h1 className="lg:text-4xl text-3xl text-gray-400 font-bold text-center">
        <span className="text-[teal]">Exclusive</span> Offers
      </h1>
      <div className="divider w-96 mx-auto mb-10 lg:flex hidden"></div>
      <div>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800 rounded-md">
          <div className="container grid  mx-auto text-center lg:grid-cols-2 justify-between xl:grid-cols-5">
            <div className="lg:w-[90vh] w-64 px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
              <span className="block mb-2 text-[#eebb4d]">
                Exclusive Hotel Booking
              </span>
              <h1 className="lg:text-5xl text-2xl font-extrabold dark:text-gray-900">
                User Information
              </h1>
              <p className="my-8">
                <span className="font-medium dark:text-gray-900">
                  A User is a Person.
                </span>
                who utilizes a computer or network service. A user often has a
                user account and is identified to the system by a username
              </p>
              <form noValidate="" action="" className="self-stretch space-y-3">
                <div>
                  <label htmlFor="name" className="text-sm sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    defaultValue={user?.displayName}
                    className="w-full rounded-md py-2 px-2 focus:ring focus:dark:ring-[teal] dark:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="text-sm sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-md py-2 px-2  focus:ring focus:dark:ring-[teal] dark:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="text-sm sr-only">
                    Email address
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Email address"
                    defaultValue={user?.email}
                    className="w-full rounded-md py-2 px-2  focus:ring focus:dark:ring-[teal] dark:border-gray-300"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  type="button"
                  className="w-full py-2 font-semibold rounded bg-[teal] dark:text-gray-50"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1">
              <div className="lg:w-[100vh] lg:ml-28">
                <h1 className="lg:text-4xl text-3xl text-gray-400 font-bold mb-2">
                  Special Offer
                </h1>
                <img src={taxi} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
