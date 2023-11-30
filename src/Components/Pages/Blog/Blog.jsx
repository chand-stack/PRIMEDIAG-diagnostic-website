import bg from "../../../assets/breadcrumb-bg.jpg";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import img from "../../../assets/chemist-doctor-explaining-coworker-vaccine-development-dna-mutations-working-equipped-laboratory.jpg";
import img1 from "../../../assets/chemist-nurse-holding-test-tubes-bringing-doctor-conducting-dna-experiment-discussing-about-medical-treatment-working-overtime.jpg";
import img3 from "../../../assets/postbox-01.jpg";
import img4 from "../../../assets/blog-10.jpg";
import img5 from "../../../assets/blog-11.jpg";
import img6 from "../../../assets/blog-12.jpg";
import img7 from "../../../assets/blog-13.jpg";
import { CiUser } from "react-icons/ci";
import { GoStopwatch } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const Blog = () => {
  return (
    <div className="font-poppin">
      <Helmet>
        <title>PrimeDiag | Blog</title>
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">Blogs</h1>
        </div>
      </div>
      <div className="container mx-auto lg:flex">
        <div className="lg:w-3/4 py-10 space-y-3">
          <div className="md:w-3/4 mx-auto">
            <img className=" mx-auto" src={img} alt="" />
            <p className="flex gap-3 py-5 justify-start items-center font-medium text-gray-500">
              <CiUser />
              By Alex Mania
              <GoStopwatch /> January 22, 2022
              <FaRegComment /> 35
            </p>
            <h1 className="text-2xl md:text-4xl font-bold py-2">
              Energizing Medicine: Doctor&lsquo;s Secrets to Recharge
            </h1>
            <p className="text-gray-600">
              In a world that constantly demands more from us, where the pace of
              life seems to be ever-accelerating, the need for energy and
              vitality has never been more crucial. While the concept of
              &lsquo;energizing medicine&lsquo; might not be a term you commonly
              hear, it encapsulates a holistic approach to well-being that goes
              beyond conventional practices. In this blog, we delve into the
              secrets that doctors employ to recharge not only their patients
              but also themselves.
            </p>
            <button className="btn btn-outline my-3">
              Explore Now <FaArrowRight />
            </button>
          </div>
          <div className="md:w-3/4 mx-auto">
            <img className=" mx-auto" src={img1} alt="" />
            <p className="flex gap-3 py-5 justify-start items-center font-medium text-gray-500">
              <CiUser />
              By Alex Mania
              <GoStopwatch /> January 22, 2022
              <FaRegComment /> 35
            </p>
            <h1 className="text-2xl md:text-4xl font-bold py-2">
              Four Ways a Clean Workplace Employees Happy and Healthy
            </h1>
            <p className="text-gray-600">
              In today&lsquo;s fast-paced work environments, fostering employee
              well-being is a key factor in maintaining a productive and
              positive workplace culture. One often overlooked aspect of
              employee happiness and health is the cleanliness of the workspace.
              A clean workplace not only contributes to a professional and
              organized atmosphere but also plays a crucial role in the overall
              well-being of employees. In this blog post, we&lsquo;ll explore
              four ways in which a clean workplace can lead to happy and healthy
              employees.
            </p>
            <button className="btn btn-outline my-3">
              Explore Now <FaArrowRight />
            </button>
          </div>
          <div className="md:w-3/4 mx-auto">
            <img className="w-full mx-auto" src={img3} alt="" />
            <p className="flex gap-3 py-5 justify-start items-center font-medium text-gray-500">
              <CiUser />
              By Alex Mania
              <GoStopwatch /> January 22, 2022
              <FaRegComment /> 35
            </p>
            <h1 className="text-2xl md:text-4xl font-bold py-2">
              Experimental cancer vaccine both treats
            </h1>
            <p className="text-gray-600">
              In the realm of medical breakthroughs, the quest to find effective
              cancer treatments and prevention strategies has long been at the
              forefront of scientific research. One particularly promising
              development in recent times involves an experimental cancer
              vaccine that is demonstrating significant potential in both
              treating existing cancers and preventing their recurrence. This
              blog post explores the groundbreaking advancements in this
              experimental cancer vaccine and the potential it holds for
              transforming the landscape of cancer care.
            </p>
            <button className="btn btn-outline my-3">
              Explore Now <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="mt-10 bg-gray-100 p-5">
            <input
              type="text"
              placeholder="Enter Your Keywords"
              className="input input-bordered w-full max-w-xs rounded-none"
            />
          </div>
          <div className="bg-gray-100 mt-5 text-center space-y-3 py-4">
            <img
              className="w-40 mx-auto rounded-full border-4 border-gray-300"
              src={img4}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Dr. Olivia Bennett</h1>
            <p className="text-gray-500">
              A leading expert in cardiology, is widely recognized for her
              exceptional skills and compassionate patient care.
            </p>
            <div className="flex justify-center gap-1">
              <FaFacebookF className="border-2 border-gray-400 p-1 text-3xl hover:text-orange-400" />
              <FaTwitter className="border-2 border-gray-400 p-1 text-3xl hover:text-orange-400" />
              <FaLinkedinIn className="border-2 border-gray-400 p-1 text-3xl hover:text-orange-400" />
              <FaYoutube className="border-2 border-gray-400 p-1 text-3xl hover:text-orange-400" />
            </div>
          </div>
          <div className="bg-gray-100 mt-5 p-7 space-y-3">
            <h1 className="text-2xl font-medium">Category</h1>
            <ul className="menu space-y-2 w-56 p-0 [&_li>*]:rounded-none">
              <li className="flex flex-row items-center justify-between text-lg bg-white w-full hover:text-orange-400">
                <a>. Business</a>
                <p>10</p>
              </li>
              <li className="flex flex-row items-center justify-between text-lg bg-white w-full hover:text-orange-400">
                <a>. Cleaning</a>
                <p>08</p>
              </li>
              <li className="flex flex-row items-center justify-between text-lg bg-white w-full hover:text-orange-400">
                <a>. Consultant</a>
                <p>24</p>
              </li>
              <li className="flex flex-row items-center justify-between text-lg bg-white w-full hover:text-orange-400">
                <a>. Creative</a>
                <p>37</p>
              </li>
              <li className="flex flex-row items-center justify-between text-lg bg-white w-full hover:text-orange-400">
                <a>. Technology</a>
                <p>103</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 mt-5 p-7 space-y-3">
            <h1 className="text-2xl font-medium">Recent Post</h1>
            <div className="bg-white flex items-center p-2 gap-2">
              <img className="w-24 h-24" src={img5} alt="" />
              <div>
                <h1 className="font-bold">Advanced Diagnostics, Expert Care</h1>
                <p className="flex items-center gap-2">
                  <GoStopwatch /> January 22, 2022
                </p>
              </div>
            </div>
            <div className="bg-white flex items-center p-2 gap-2">
              <img className="w-24 h-24" src={img6} alt="" />
              <div>
                <h1 className="font-bold">Precision Health Starts Here</h1>
                <p className="flex items-center gap-2">
                  <GoStopwatch /> January 22, 2022
                </p>
              </div>
            </div>
            <div className="bg-white flex items-center p-2 gap-2">
              <img className="w-24 h-24" src={img7} alt="" />
              <div>
                <h1 className="font-bold">Your Health, Our Diagnosis</h1>
                <p className="flex items-center gap-2">
                  <GoStopwatch /> January 22, 2022
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 mt-5 p-7 space-y-3">
            <h1 className="text-2xl font-medium">Tags</h1>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-sm btn-outline">Techology</button>
              <button className="btn btn-sm btn-outline">Food</button>
              <button className="btn btn-sm btn-outline">Personality</button>
              <button className="btn btn-sm btn-outline">Life Style</button>
              <button className="btn btn-sm btn-outline">Travel</button>
              <button className="btn btn-sm btn-outline">Nature</button>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Blog;
