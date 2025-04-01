import axios from "axios";
import { useState, useEffect } from "react";
import Genre from "../model/Genre";

interface FetchGenreResponse {
  genres: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_APP_API_KEY}`;
    axios
      .get<FetchGenreResponse>(url)
      .then((res) => {
        setGenre(res.data.genres);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return { genre, error, isLoading };
};

export default useGenre;
