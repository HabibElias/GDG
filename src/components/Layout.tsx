import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="max-h-max min-h-[100vh] w-[100%] bg-white transition-colors duration-200 dark:bg-black">
      <div className="relative mx-auto max-h-max min-h-[100vh] w-[100%] p-4 xl:w-[70%]">
        <div className="mb-24">
          <NavBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
