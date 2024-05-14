import blog from "../../assets/BN.mp4";
const Banner = () => {
  return (
    <div className="lg:mx-10 mx-2">
      <video className="mx-auto rounded-t-md " src={blog} autoPlay loop muted />
    </div>
  );
};

export default Banner;
