import axios from "axios";

const publicAxios = axios.create({
  baseURL: "https://diagnostic-server.vercel.app",
});
const usePublicAxios = () => {
  return publicAxios;
};

export default usePublicAxios;
