const ContactPage = () => {
  return (
    <div className="grid h-[80vh] place-items-center">
      <div className="mx-auto max-w-lg space-y-4 rounded-xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-700">
          If you have any questions about React Router, feel free to reach out
          to us:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:support@reactrouter.com"
              className="text-blue-500 hover:underline"
            >
              support@reactrouter.com
            </a>
          </li>
          <li className="text-gray-700">
            Twitter:{" "}
            <a
              href="https://twitter.com/reactrouter"
              className="text-blue-500 hover:underline"
            >
              @reactrouter
            </a>
          </li>
          <li className="text-gray-700">
            GitHub:{" "}
            <a
              href="https://github.com/remix-run/react-router"
              className="text-blue-500 hover:underline"
            >
              React Router Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
