import texi from "../../assets/taxi-app.gif";
import another from "../../assets/giphy.gif";
const Newsletter = () => {
  return (
    <div className="averia-serif mt-10 mx-10 ">
      <h1 className="text-4xl text-gray-400 font-bold text-center">
        <span className="text-[teal]">Exclusive</span> Offers
      </h1>
      <div className="divider w-96 mx-auto mb-10"></div>
      <div>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800 rounded-md">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
              <span className="block mb-2 dark:text-violet-600">
                Exclusive Hotel Booking
              </span>
              <h1 className="text-5xl font-extrabold dark:text-gray-900">
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
                    className="w-full rounded-md focus:ring focus:dark:ring-[teal] dark:border-gray-300"
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
                    className="w-full rounded-md focus:ring focus:dark:ring-[teal] dark:border-gray-300"
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
                    className="w-full rounded-md focus:ring focus:dark:ring-[teal] dark:border-gray-300"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-2 font-semibold rounded bg-[teal] dark:text-gray-50"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1">
              <h1 className="text-4xl text-gray-400 font-bold">
                Special Offer
              </h1>
              <img
                src={texi}
                alt=""
                className="object-cover w-full  rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
