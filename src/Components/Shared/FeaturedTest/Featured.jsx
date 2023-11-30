import useGetTests from "../../../Hooks/getTests";
import bg from "../../../assets/breadcrumb-bg.jpg";
const Featured = () => {
  const [tests] = useGetTests();
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
    </div>
  );
};

export default Featured;
