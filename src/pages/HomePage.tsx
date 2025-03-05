import useTheme from "../hooks/useTheme";

const HomePage = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="grid h-[80vh] place-content-center font-[poppins]">
      <h1
        className={`text-center text-4xl font-bold ${isLightMode ? "text-blue-800" : "text-blue-400"}`}
      >
        Welcome to the Home Page
      </h1>
      <p className="text-2xs text-center">
        This is the home page of our React Router application.
      </p>
    </div>
  );
};

export default HomePage;
