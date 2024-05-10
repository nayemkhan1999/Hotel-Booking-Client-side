import blog from "../../assets/BN.mp4";
const Banner = () => {
  return (
    <div className="mx-10">
      <video className="mx-auto rounded-t-md " src={blog} autoPlay loop muted />
    </div>
  );
};

export default Banner;
