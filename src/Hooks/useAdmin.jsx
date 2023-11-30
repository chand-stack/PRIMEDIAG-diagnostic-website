import { useContext } from "react";
import usePublicAxios from "../useAxios/usePublicAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const axios = usePublicAxios();
  const { user } = useContext(AuthContext);
  const { data: isAdmin = {}, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/user/admin/${user?.email}`);
      return res.data.data;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
