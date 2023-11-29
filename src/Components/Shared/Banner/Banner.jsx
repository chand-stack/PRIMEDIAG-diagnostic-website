import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useBanner from "../../../Hooks/useBanner";
import { Link } from "react-router-dom";

const Banner = () => {
  const [banner] = useBanner();
  const selectedBanner = banner?.filter((item) => item.isActive === true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 200,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      {selectedBanner?.map((item) => (
        <div key={item?._id}>
          <div
            className="hero md:min-h-screen"
            style={{
              backgroundImage: `url(${item?.image})`,
            }}
          >
            <div className=" h-full w-full flex items-center bg-gradient-to-r from-[#1f6c7b] via-[#34cdebea]">
              <div className=" container mx-auto text-start text-white py-5 px-2 md:p-0">
                <div className=" text-white space-y-4 px-4 lg:w-1/2">
                  <p className="text-xl">{item?.name}</p>
                  <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                    {item?.title}
                  </h1>
                  <p className="mb-5 md:leading-loose text-white md:text-lg">
                    {item?.description}
                  </p>
                  <div data-aos="fade-down">
                    <p className="md:text-xl md:leading-loose font-medium">
                      {" "}
                      Apply Code{" "}
                      <span className="text-lg bg-orange-500 rounded-md text-white py-1 px-2">
                        {item?.couponcode}
                      </span>{" "}
                      for a{" "}
                      <span className="text-lg bg-orange-500 rounded-md text-white py-1 px-2">
                        {item?.couponrate}% Discount
                      </span>
                    </p>
                  </div>
                  <Link
                    to="/alltestpage"
                    className="btn md:text-xl mt-3 text-white bg-orange-500 border-none"
                  >
                    All Tests
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
