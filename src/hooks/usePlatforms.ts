import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import { platformService } from "../services/services";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformService.getData(),
    // fresh data for 24h, refetching from the backend will be done only at 24h intervals
    staleTime: ms("24h"),
    // ship our app with platform data to improve the performance of our website
    initialData: platforms,
  });

export default usePlatforms;
