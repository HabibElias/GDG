import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-around gap-40 sm:gap-12">
      <p className="font-[poppins] text-2xl font-bold tracking-wider">
        ReactRouter
      </p>
      <ul className="flex gap-12 p-2 font-[poppins] text-[1.2rem] [&_.active]:opacity-50">
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
      </ul>
    </div>
  );
};

export default NavBar;
