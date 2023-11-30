import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../useAxios/usePublicAxios";

const useBanner = () => {
  const axios = usePublicAxios();
  const {
    data: banner = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axios.get("/banner");
      return res.data.data;
    },
  });
  return [banner, refetch, isLoading];
};

export default useBanner;
