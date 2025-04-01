import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import Watchlist from "./pages/Watchlist";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/watchlist", element: <Watchlist /> },
    ],
  },
]);

export default routes;
