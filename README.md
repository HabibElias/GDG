# React Router

- This Project is for practicing react router.
- I have setuped the routes separately using the `createBrowserRouter` function from react-router.
- ```js
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
  ]);

  export default routes;
  ```

- A Layout is used for displaying the children routes by using the `Outlet` component from react-router
- ```js
  const Layout = () => {
    return (
      <div className="flex flex-col">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  export default Layout;
  ```

- And finally using `RouterProvider` component from react-router we wrap our routes with it. It displays the elements based on the current path.
- ```js
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={routes} />
    </StrictMode>,
  );
  ```
- To handle the error page, I used the `errorElement` for the displaying the error page when there is an error.
- ```js
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
  ```

## Deployment Link

https://react-router-r5dacm5p7-habib-elias-projects.vercel.app
