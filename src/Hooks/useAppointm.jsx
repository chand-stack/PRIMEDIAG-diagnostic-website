import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../useAxios/usePublicAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAppointm = () => {
  const { user } = useContext(AuthContext);
  const axios = usePublicAxios();
  const { data: reservation = [], refetch } = useQuery({
    queryKey: ["reservation", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/reservation/${user?.email}`);
      return res.data.data;
    },
  });
  return [reservation, refetch];
};

export default useAppointm;
