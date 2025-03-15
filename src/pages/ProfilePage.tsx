import useAuth from "../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="grid h-[80vh] place-items-center">
      <div className="mx-auto max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-black">Profile Page</h1>
        <p className="text-gray-700">Name: {user.name}</p>
        <p className="text-gray-700">University: {user.university}</p>
        <p className="text-gray-700">Phone Number: {user.phNum}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
