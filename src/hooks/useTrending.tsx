import { useEffect, useState } from "react";
import Movie from "../model/Movie";
import axiosInstance from "../services/ApiClient";

interface FetchMoviesResponse {
  results: Movie[];
}

const useTrending = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const url = `/trending/movie/day`;
    axiosInstance
      .get<FetchMoviesResponse>(url)
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return { movies, error, isLoading };
};

export default useTrending;
