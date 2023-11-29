import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../useAxios/usePublicAxios";

const useBanner = () => {
  const axios = usePublicAxios();
  const { data: banner, refetch } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axios.get("/banner");
      return res.data.data;
    },
  });
  return [banner, refetch];
};

export default useBanner;
