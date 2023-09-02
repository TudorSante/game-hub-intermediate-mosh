import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import { genreService } from "../services/services";
import ms from "ms";

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
    staleTime: ms("24h"), // for 24h our data will be fresh => no req will be made to the backend to fetch the genres
    // provide initial data to improve the perf of our app
    initialData: genres,
  });

export default useGenres;
