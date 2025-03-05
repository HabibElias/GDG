import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-start justify-between">
      <div className="">
        <h1 className="logo text-3xl font-bold">Task Management</h1>
        <p className="text-gray-400">
          Let's get productive! Add your tasks below
        </p>
      </div>
      <label
        htmlFor="srchTask"
        className="flex items-center gap-2 rounded-xl bg-purple-50 p-3 text-purple-950"
      >
        <Search className="size-5 flex-none text-purple-950 opacity-50" />
        <input
          type="text"
          id="srchTask"
          name="search"
          className="h-full flex-2 outline-none"
          placeholder="Search a Task"
        />
        <button type="button" className="h-full hover:shadow">
          <Search />
        </button>
      </label>
    </header>
  );
};

export default Header;
