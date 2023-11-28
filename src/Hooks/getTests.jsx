import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../useAxios/usePublicAxios";

const useGetTests = () => {
  const publicAxios = usePublicAxios();

  const { data: tests, refetch = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await publicAxios.get("/service");
      return res?.data?.data;
    },
  });

  return [tests, refetch];
};

export default useGetTests;
