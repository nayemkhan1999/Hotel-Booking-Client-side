import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import MapSection from "../MapSection/MapSection";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div className="averia-serif">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
      <MapSection></MapSection>
      <Newsletter></Newsletter>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default Home;
