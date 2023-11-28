import useGetTests from "../../../Hooks/getTests";
import { MdHealthAndSafety } from "react-icons/md";
import bg from "../../../assets/breadcrumb-bg.jpg";
import { Link } from "react-router-dom";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Faq from "../../Shared/Faq/Faq";
import { useState } from "react";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import { useQuery } from "@tanstack/react-query";

const AllTestPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(3);

  const [tests] = useGetTests();
  console.log(tests?.length);

  const publicAxios = usePublicAxios();

  const { data: testList = [], refetch } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await publicAxios.get(
        `/service?page=${currentPage}&size=${itemPerPage}`
      );
      return res?.data?.data;
    },
  });

  // let itemPage = [];
  // const totalPage = Math.ceil(tests?.length / itemPerPage);
  // for (let i = 0; i < totalPage; i++) {
  //   itemPage.push(i);
  // }
  console.log(testList.length);
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
            All Tests
          </h1>
        </div>
      </div>
      <div className="container px-2 lg:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 py-20">
        {testList?.map((item) => (
          <div
            key={item?._id}
            className="card rounded-none bg-base-100 relative overflow-hidden group"
          >
            <MdHealthAndSafety className="text-8xl left-3 text-[#34cceb] absolute z-10 top-[30%] bg-white rounded-full group-hover:text-orange-400 transition-colors duration-300"></MdHealthAndSafety>
            <figure>
              <img
                className="lg:h-64 w-full transition-transform duration-500 transform group-hover:scale-125"
                src={item?.image}
                alt="Tests"
              />
            </figure>
            <div className="card-body mt-5">
              <h2 className="text-xl font-semibold">{item?.name}</h2>
              <p>
                empowering you with personalized health insights. Choose
                confidence, choose clarity – choose [PRIME DIAG].
              </p>
              <p className="font-medium">Book Your Appointment Today!</p>
              <p className="font-medium">
                The last available date for testing :<br />
                {new Date(item?.date).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/test/detail/${item?._id}`}
                  className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-blue-900"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto">
        <button className="btn bg-[#34cceb] text-white">Prev</button>
        {/* {itemPage.map((item, idx) => (
          <button key={item}>{}</button>
        ))} */}
        <button className="btn bg-[#34cceb] text-white">Next</button>
      </div>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default AllTestPage;
