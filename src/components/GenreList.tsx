import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre, isLoading, error } = useGenre();

  if (error) return;

  if (isLoading)
    return (
      <div className="flex h-[80vh] w-[100%] items-center justify-center">
        <div className="size-10 animate-ping rounded-full bg-blue-500"></div>
      </div>
    );

  return (
    <div>
      <div className="my-6 font-[poppins] font-bold text-yellow-400">Genre</div>
      <ul className="flex flex-wrap gap-3">
        {genre.map((g) => (
          <div
            key={g.id}
            className="rounded bg-linear-45 from-yellow-400 to-yellow-200 p-3 font-[poppins] text-xs text-black cursor-pointer hover:underline"
          >
            {g.name}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
