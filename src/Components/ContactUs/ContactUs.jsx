import { Marker, Map } from "pigeon-maps";
import page from "../../assets/page.jpg";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  return (
    <div className="mx-10 averia-serif ">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div
        className="rounded-t-md"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${page})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1 className="text-7xl text-center font-bold text-gray-300 pt-10">
          Contact Us
        </h1>
        <div className="flex items-center justify-around gap-5">
          <div className="mt-10">
            <p className="text-[#AF8C3E] tracking-widest ml-5 mb-2 text-sm">
              Let’s talk
            </p>
            <p className="text-gray-200  ml-5 text-3xl">
              Send Us, We’d love to hear from you.
            </p>
            <div className="ml-5 mt-4">
              <input
                className="bg-gray-200 p-2 text-[#AF8C3E]"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="ml-5 mt-4">
              <input
                className="bg-gray-200 p-2 text-[#AF8C3E]"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="ml-5 mt-4">
              <input
                className="bg-gray-200 p-2 text-[#AF8C3E]"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="ml-5 mt-4">
              <textarea
                className="bg-gray-200 p-2 text-[#AF8C3E]"
                id="message"
                name="message"
                rows="4"
                cols="35"
                placeholder="massage"
              ></textarea>
            </div>
            <button className="btn px-5 mt-2 bg-[#AF8C3E] text-gray-200 border-none rounded-none ml-5">
              Send Massage
            </button>
          </div>

          <div className="mt-10">
            <Map
              height={400}
              width={670}
              defaultCenter={[21.429109322139126, 91.97005959974331]}
              defaultZoom={11}
            >
              <Marker
                width={50}
                anchor={[21.429109322139126, 91.97005959974331]}
              />
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
