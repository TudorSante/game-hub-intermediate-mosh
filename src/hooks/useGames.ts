import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import { Platform } from "../hooks/usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    /* the queryKey parameter is used to det. when a query should be re-fetched.
    So if your query function depends on a variable (gameQuery), include it in
    your query key. Finally, query keys act as dependencies for your query fcns. */
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    // staleTime: 60 * 60 * 1000,
  });

export default useGames;
