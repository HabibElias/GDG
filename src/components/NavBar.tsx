import {
  Contact,
  Home,
  Info,
  LogIn,
  LogOut,
  Moon,
  Sun,
  User
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

const NavBar = () => {
  const { isLightMode, setIsLightMode } = useTheme();
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-around gap-40 sm:gap-12">
      <p className="font-[poppins] text-2xl font-bold tracking-wider">
        ReactRouter
      </p>
      <ul className="flex items-center gap-12 p-2 font-[poppins] text-[1rem] *:flex *:items-center *:gap-2 [&_.active]:opacity-50">
        <NavLink className="duration-150 hover:opacity-50" to={"/"}>
          <Home />
          Home
        </NavLink>
        <NavLink className="duration-150 hover:opacity-50" to={"/about"}>
          <Info />
          About
        </NavLink>
        <NavLink className="duration-150 hover:opacity-50" to={"/contact"}>
          <Contact />
          Contact
        </NavLink>
        {user.isLoged ? <ProfileLink /> : <LoginLink />}
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

const ProfileLink = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const { isLightMode } = useTheme();

  const handleLogout = () => {
    navigate("/");

    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <NavLink className="duration-150 hover:opacity-50" to={"/profile"}>
        <User />
        Profile
      </NavLink>
      <button
        onClick={handleLogout}
        className={`cursor-pointer rounded p-2 text-center text-[0.9rem] transition-colors duration-200 ${!isLightMode ? "bg-red-400 text-black" : "bg-red-500 text-white"}`}
      >
        <LogOut />
        Logout
      </button>
    </>
  );
};

const LoginLink = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const { isLightMode } = useTheme();

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      user: {
        isLoged: true,
        name: "Habib Elias",
        phNum: "0940827141",
        university: "AASTU",
      },
    });

    // navigate to the homepage with a new user
    navigate("/");
  };
  return (
    <button
      onClick={handleLogin}
      className={`flex cursor-pointer items-center gap-2 rounded p-2 text-center text-[0.9rem] transition-colors duration-200 ${!isLightMode ? "bg-blue-400 text-black" : "bg-blue-800 text-white"}`}
    >
      <LogIn />
      Login
    </button>
  );
};
