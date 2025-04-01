import { NavLink } from "react-router-dom";
import { useWatchlist } from "../provider/WatchlistProvider";
import DarkModeToggle from "./DarkmodeToggle";

const NavBar = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className="mb-3 flex items-center justify-between font-[poppins]">
      <h1 className="text-2xl font-bold tracking-tighter">MovieList</h1>

      <nav>
        <ul className="flex items-center gap-4 [&_a.active]:text-yellow-300">
          <NavLink className={"duration-200 hover:opacity-45"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"duration-200 hover:opacity-45"} to={"/movies"}>
            Movies
          </NavLink>
          <NavLink
            className={"relative duration-200 p-4 hover:opacity-45"}
            to={"/watchlist"}
          >
            Watchlist
            <div className="absolute top-0 right-0 rounded-full bg-yellow-300 px-2 text-black">
              {watchlist.length}
            </div>
          </NavLink>
          <DarkModeToggle />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
