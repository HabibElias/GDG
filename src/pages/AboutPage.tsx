import useTheme from "../hooks/useTheme";

const AboutPage = () => {
  const { isLightMode } = useTheme();

  return (
    <div className="grid h-[80vh] place-content-center font-[poppins]">
      <h1
        className={`text-center text-4xl font-bold ${isLightMode ? "text-blue-800" : "text-blue-400"}`}
      >
        About React Router
      </h1>
      <p className="text-2xs mt-4 max-w-300 text-center">
        React Router is a powerful routing library for React that allows you to
        create dynamic and complex routing structures in your application. It
        helps in navigating between different components and pages seamlessly.
      </p>
    </div>
  );
};

export default AboutPage;
