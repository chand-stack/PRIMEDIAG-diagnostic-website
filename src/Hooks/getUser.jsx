import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../useAxios/usePublicAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useGetUser = () => {
  const { user } = useContext(AuthContext);
  const publicAxios = usePublicAxios();
  const { data: isUser = {}, refetch } = useQuery({
    queryKey: ["isUser", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/user/${user?.email}`);
      return res.data.data;
    },
  });

  return [isUser, refetch];
};

export default useGetUser;
