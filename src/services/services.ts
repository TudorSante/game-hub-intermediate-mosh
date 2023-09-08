import APIClient from "./api-client";
import Game from "../entities/Game";
import Platform from "../entities/Platform";
import Genre from "../entities/Genre";

export const gameService = new APIClient<Game>("games");
export const platformService = new APIClient<Platform>(
  "/platforms/lists/parents"
);
export const genreService = new APIClient<Genre>("/genres");
