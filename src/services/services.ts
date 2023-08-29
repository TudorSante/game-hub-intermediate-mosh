import APIClient from "./api-client";
import { Game } from "../hooks/useGames";
import { Platform } from "../hooks/usePlatforms";
import { Genre } from "../hooks/useGenres";

export const gameService = new APIClient<Game>("games");
export const platformService = new APIClient<Platform>(
  "/platforms/lists/parents"
);
export const genreService = new APIClient<Genre>("/genres");
