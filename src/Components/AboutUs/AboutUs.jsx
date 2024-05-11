import one from "../../assets/one.jpg";
const AboutUs = () => {
  return (
    <div className="mx-10 averia-serif ">
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
        <h1 className="text-7xl text-center font-bold text-gray-300 pt-44">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
