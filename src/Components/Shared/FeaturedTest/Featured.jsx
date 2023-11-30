import { Link } from "react-router-dom";
import useGetTests from "../../../Hooks/getTests";
import bg from "../../../assets/breadcrumb-bg.jpg";
const Featured = () => {
  const [tests, refetch, isLoading] = useGetTests();
  console.log(tests);
  const featureTest = tests.filter((item) => item.booking > 0);
  console.log(featureTest);
  return (
    <div className="container mx-auto">
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
            Best Medical Services
          </h1>
        </div>
      </div>
      {isLoading ? (
        <>
          <span className="loading loading-bars loading-lg min-h-screen mx-auto flex justify-center items-center"></span>
        </>
      ) : (
        <div className="container px-2 lg:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 pt-20 pb-10">
          {featureTest?.map((item) => (
            <div
              key={item?._id}
              className="card rounded-none bg-base-100 relative overflow-hidden group"
            >
              <figure>
                <img
                  className="lg:h-64 w-full transition-transform duration-500 transform group-hover:scale-125 overflow-hidden"
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
      )}
    </div>
  );
};

export default Featured;
