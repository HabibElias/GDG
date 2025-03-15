import { createBrowserRouter } from "react-router-dom";
import MessagePage from "./pages/MessagePage";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoutes from "./components/PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <MessagePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        element: <PrivateRoutes />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
    ],
  },
]);

export default routes;
