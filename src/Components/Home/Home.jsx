import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import MapSection from "../MapSection/MapSection";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MapSection></MapSection>
      <Newsletter></Newsletter>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default Home;
