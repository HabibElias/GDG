import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { isLightMode } = useTheme();
  return (
    <div
      className={`mx-auto flex max-h-max min-h-[100vh] w-[100vw] flex-col bg-[var(--bgColor)] break-words text-[var(--textColor)] transition-colors duration-200 ${
        isLightMode
          ? ""
          : "[--bgColor:#000] [--cardBg:#1624566e] [--cardText:#fff] " +
            "[--textBlue:oklch(0.707_0.165_254.624)] [--textColor:#fff]" +
            " [--border-color:#ffffff4b] [--searchBg:#eff6ff]"
      } `}
    >
      <div className="mx-auto px-5 lg:w-[70%]">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
