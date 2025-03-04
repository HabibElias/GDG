import { Home } from "lucide-react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="grid h-[100vh] place-content-center">
      <h1 className="text-4xl font-bold">Oops...</h1>
      {isRouteErrorResponse(error) ? (
        <>
          <p className="text-2xl">
            Sorry, Invalid Page.
            <br />
          </p>
          <Link
            className="mt-3 flex w-max gap-2 rounded-lg bg-blue-300 p-2 font-[poppins] text-blue-50 transition-colors duration-150 hover:bg-blue-600"
            to={"/"}
          >
            <Home /> Go to Home
          </Link>
        </>
      ) : (
        <>
          <p className="text-2xl">Sorry, Something went wrong</p>
          <br />
          <Link
            className="mt-3 flex w-max gap-2 rounded-lg bg-blue-300 p-2 font-[poppins] text-blue-50 transition-colors duration-150 hover:bg-blue-600"
            to={"/"}
          >
            <Home /> Go to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
