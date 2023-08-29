import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    // fresh data for 24h, refetching from the backend will be done only at 24h intervals
    staleTime: 24 * 60 * 60 * 1000,
    // ship our app with platform data to improve the performance of our website
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
