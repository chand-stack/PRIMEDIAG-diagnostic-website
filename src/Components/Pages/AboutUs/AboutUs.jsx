import { MdRoundaboutRight } from "react-icons/md";
import bg from "../../../assets/breadcrumb-bg.jpg";
import img from "../../../assets/about-thumb-11.jpg";
import img1 from "../../../assets/blog-10.jpg";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { LuQuote } from "react-icons/lu";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import { useQuery } from "@tanstack/react-query";
import Brands from "../../Shared/Brands/Brands";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  const publicAxios = usePublicAxios();
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await publicAxios.get("/recommend");
      return res.data.data;
    },
  });
  return (
    <div className="font-poppin">
      <Helmet>
        <title>PrimeDiag | About</title>
      </Helmet>
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
            About Us
          </h1>
        </div>
      </div>
      <div className="font-poppin container mx-auto grid grid-cols-1 md:grid-cols-2 my-20 md:gap-5">
        <div className="relative">
          <img
            className="mx-auto rounded-xl max-h-screen p-5 md:p-0"
            src={img}
            alt=""
          />
          <div className="p-1 absolute right-5 bottom-0 bg-base-100 shadow-xl">
            <div className="">
              <h2 className="card-title text-white bg-[#34cceb] text-2xl">
                25+ Years of Experience
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pr-20">
          <p className="text-[#34cceb] text-lg md:text-2xl font-medium flex-grow flex items-center gap-3">
            <MdRoundaboutRight />
            PRIME DIAG
          </p>
          <h1 className="text-2xl md:text-5xl font-semibold text-black flex-grow">
            Best Healthcare for you
          </h1>
          <p className="leading-8 flex-grow">
            Experience the difference with PRIMEDIAG — where leading healthcare
            meets personalized care, setting new benchmarks for a healthier,
            happier future.
          </p>
          <div className="space-y-3 flex-grow">
            <p className="flex items-center gap-2">
              <LuArrowUpRightFromCircle className="text-white bg-orange-400 rounded-full text-3xl p-1" />
              Reduced symptoms of anxiety
            </p>
            <p className="flex items-center gap-2">
              <LuArrowUpRightFromCircle className="text-white bg-orange-400 rounded-full text-3xl p-1" />
              Improved stress management
            </p>
            <p className="flex items-center gap-2">
              <LuArrowUpRightFromCircle className="text-white bg-orange-400 rounded-full text-3xl p-1" />
              Better emotional regulation
            </p>
          </div>
          <div className="bg-white flex items-center p-2 gap-2">
            <img className="w-24 h-24 rounded-full" src={img1} alt="" />
            <div>
              <h1 className="font-bold">William K. Diaz</h1>
              <p className="flex items-center gap-2 text-gray-500">Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            Physician-Approved Picks
          </h1>
          <div className=" mx-auto mt-6 mb-7 container">
            <div className="carousel bg-white carousel-center w-full  p-4 space-x-4 rounded-box">
              {reviews?.map((item) => (
                <div
                  key={item?._id}
                  className="carousel-item w-4/5 md:w-3/5 hover:bg-[#34cceb] hover:text-white hover:duration-500 rounded-xl shadow-xl p-5 flex flex-col justify-center transform transition-transform hover:scale-105"
                >
                  <LuQuote className="mx-auto text-6xl" />
                  <h1 className="p-2 text-gray-400 hover:text-white text-2xl flex-grow">
                    <i> {item?.recommend}</i>
                  </h1>
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-2xl font-bold">{item?.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Brands></Brands>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default AboutUs;
