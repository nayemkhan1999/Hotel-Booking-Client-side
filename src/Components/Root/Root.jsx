import { Outlet } from "react-router-dom";
import NavBar from "../Nav/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-292px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
