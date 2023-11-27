import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import bg from "../../../assets/breadcrumb-bg.jpg";

const Recommendation = () => {
  const publicAxios = usePublicAxios();
  const { data: recommendation } = useQuery({
    queryKey: ["recommendation"],
    queryFn: async () => {
      const res = await publicAxios.get("/recommend");
      return res.data.data;
    },
  });
  return (
    <div className="font-poppin">
      <div
        className="h-52"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#34cceb] bg-opacity-60 flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Physician-Approved Picks
          </h1>
        </div>
      </div>
      <div className="lg:w-9/12 mx-auto mt-6 mb-7 container">
        <div className="carousel bg-white carousel-center w-full  p-4 space-x-4 rounded-box">
          {recommendation?.map((item) => (
            <div
              key={item?._id}
              className="carousel-item w-4/5 md:w-3/5 hover:bg-[#34cceb] hover:text-white hover:duration-500 rounded-xl shadow-xl p-5 flex flex-col justify-center transform transition-transform hover:scale-105"
            >
              <h1 className="p-2 font-semibold flex-grow">
                <i> {item?.recommend}</i>
              </h1>
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  className="h-28 w-32 rounded-full"
                  src={item?.image}
                  alt="user"
                />
                <h1 className="text-2xl font-bold">{item?.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
