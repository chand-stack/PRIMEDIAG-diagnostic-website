import img from "../../../assets/about-thumb-3.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdRoundaboutRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
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
    <div className="font-poppin container mx-auto grid grid-cols-1 md:grid-cols-2 my-20 md:gap-5">
      <div className="relative">
        <img
          data-aos="fade-right"
          className="mx-auto rounded-xl p-5 md:p-0"
          src={img}
          alt=""
        />
        <div
          data-aos="flip-right"
          className="card absolute right-5 bottom-0 w-52 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title text-[#34cceb] text-3xl md:text-5xl">
              25+
            </h2>
            <p>Years of Experience in Medical Service</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:pr-20">
        <p className="text-[#34cceb] text-lg md:text-2xl font-medium flex-grow flex items-center gap-3">
          <MdRoundaboutRight />
          ABOUT US
        </p>
        <h1 className="text-2xl md:text-5xl font-semibold text-black flex-grow">
          Provid leading <br /> healthcare
        </h1>
        <p className="leading-8 flex-grow">
          From diagnostics to treatment and beyond, we prioritize innovation,
          integrity, and the overall health journey of those we serve. Our
          vision is to be at the forefront of healthcare excellence,
          consistently exceeding expectations and making a positive impact on
          the lives we touch.
        </p>
        <p className="leading-8 flex-grow">
          Experience the difference with PRIMEDIAG — where leading healthcare
          meets personalized care, setting new benchmarks for a healthier,
          happier future.
        </p>
        <div className="flex items-center gap-2">
          <button className="btn rounded-full text-xl bg-orange-400 hover:bg-[#34cceb] text-white">
            Know More
          </button>
          <BiSolidPhoneCall className="text-2xl" />
          <p className="text-black text-lg">+380961381876</p>
        </div>
      </div>
    </div>
  );
};

export default About;
