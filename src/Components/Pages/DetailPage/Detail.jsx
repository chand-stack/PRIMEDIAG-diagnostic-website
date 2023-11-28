import { useParams } from "react-router-dom";
import bg from "../../../assets/breadcrumb-bg.jpg";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import { useQuery } from "@tanstack/react-query";
import { MdRoundaboutRight } from "react-icons/md";
import Faq from "../../Shared/Faq/Faq";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
const Detail = () => {
  const publicAxios = usePublicAxios();
  const { id } = useParams();
  const { data: testDetail = {} } = useQuery({
    queryKey: ["testDetail", id],
    queryFn: async () => {
      const res = await publicAxios.get(`/service/${id}`);
      return res.data.data;
    },
  });
  console.log(testDetail);

  return (
    <div className="font-poppin bg-gray-100">
      <div
        className="h-52 md:h-96"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#34cceb] bg-opacity-60 flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Test Deatils
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="md:flex items-center my-10">
          <div className="md:w-1/2 text-center">
            <h1 className="text-[#34cceb] text-lg md:text-2xl font-medium flex-grow flex justify-center items-center gap-3">
              <MdRoundaboutRight />
              PRIME DIAG
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-black">
              {testDetail?.name}
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="font-medium text-gray-600">{testDetail?.details}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-10 gap-5">
          <div className="">
            <img
              className="rounded-xl mx-auto md:h-60 lg:h-80 px-2 md:px-0"
              src={testDetail?.image}
              alt="test"
            />
          </div>
          <div className="px-2 md:px-0 space-y-4 max-h-80">
            <div className="">
              <p className="font-medium text-xl">
                <span className="text-black font-semibold lg:text-2xl">
                  The last available date:
                </span>{" "}
                {new Date(testDetail?.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex-grow">
              <p className="font-medium text-xl">
                <span className="text-black font-semibold lg:text-2xl">
                  Available Slot:
                </span>{" "}
                {testDetail?.slot}
              </p>
            </div>
            <div className="flex-grow">
              <p className="font-medium text-xl">
                <span className="text-black font-semibold lg:text-2xl">
                  Cost:
                </span>{" "}
                ${testDetail?.price}
              </p>
            </div>
            <button className="btn bg-[#34cceb] text-white">Book Now</button>
          </div>
        </div>
      </div>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Detail;
