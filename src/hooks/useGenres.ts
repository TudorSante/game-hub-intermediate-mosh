import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { genreService } from "../services/services";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => genreService.getData(),
    staleTime: 24 * 60 * 60 * 1000, // for 24h our data will be fresh => no req will be made to the backend to fetch the genres
    // provide initial data to improve the perf of our app
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
