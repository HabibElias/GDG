import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { isLightMode } = useTheme();

  return (
    <div
      className={`flex h-[100vh] flex-col ${isLightMode ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
