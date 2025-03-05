import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const NavBar = () => {
  const { isLightMode, setIsLightMode } = useTheme();

  return (
    <div className="flex items-center justify-around gap-40 sm:gap-12">
      <p className="font-[poppins] text-2xl font-bold tracking-wider">
        ReactRouter
      </p>
      <ul className="flex items-center gap-12 p-2 font-[poppins] text-[1.2rem] [&_.active]:opacity-50">
        <NavLink className="duration-150 hover:opacity-50" to={"/"}>
          Home
        </NavLink>
        <NavLink className="duration-150 hover:opacity-50" to={"/about"}>
          About
        </NavLink>
        <NavLink className="duration-150 hover:opacity-50" to={"/contact"}>
          Contact
        </NavLink>
        <NavLink className="duration-150 hover:opacity-50" to={"/profile"}>
          Profile
        </NavLink>
        <li>
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className={`cursor-pointer rounded p-2 transition-colors duration-200 ${!isLightMode ? "bg-white text-black" : "bg-black text-white"}`}
          >
            {isLightMode ? <Sun /> : <Moon />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
