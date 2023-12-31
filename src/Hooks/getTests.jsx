import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../useAxios/usePublicAxios";

const useGetTests = (currentPage, itemPerPage) => {
  const publicAxios = usePublicAxios();

  const {
    data: tests = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tests", currentPage],
    queryFn: async () => {
      const res = await publicAxios.get(
        `/service?page=${currentPage}&size=${itemPerPage}`
      );
      return res?.data?.data;
    },
  });

  return [tests, refetch, isLoading];
};

export default useGetTests;
