import bg from "../../../assets/breadcrumb-bg.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiPhone } from "react-icons/ci";
import GoogleMapReact from "google-map-react";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Brands from "../../Shared/Brands/Brands";
import { Helmet } from "react-helmet-async";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="font-poppin">
      <Helmet>
        <title>PrimeDiag | Contact</title>
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
            Contact Us
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 container mx-auto my-20">
        <div className="card  bg-sky-100 hover:text-orange-400 hover:duration-500">
          <div className="card-body text-center">
            <h2 className="">
              <CiLocationOn className="bg-[#34cceb] text-white mx-auto text-7xl rounded-full" />
            </h2>
            <p className="text-2xl font-semibold">Our Location</p>
            <p>House #5, Street Number #98, brasilia- 70000-000, Brazil.</p>
          </div>
        </div>
        <div className="card bg-sky-100 hover:text-orange-400 hover:duration-500">
          <div className="card-body text-center">
            <h2 className="">
              <MdOutlineMail className="bg-[#34cceb] text-white mx-auto text-7xl rounded-full" />
            </h2>
            <p className="text-2xl font-semibold">Our Email Address</p>
            <p>
              <Link>support@PRIMEDIAG.com</Link>
            </p>
            <p>
              <Link>contact@PRIMEDIAG.com</Link>
            </p>
          </div>
        </div>
        <div className="card bg-sky-100 hover:text-orange-400 hover:duration-500">
          <div className="card-body text-center">
            <h2 className="">
              <CiPhone className="bg-[#34cceb] text-white mx-auto text-7xl rounded-full" />
            </h2>
            <p className="text-2xl font-semibold">Contact Phone Number</p>
            <p>+380961381876</p>
            <p>+380961381877</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20 lg:flex justify-evenly items-center bg-[#34cceb]">
        <div className="h-screen lg:w-1/2 rounded-xl p-2">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 pb-4">
          <div className="form-control w-full">
            <input
              required
              type="text"
              placeholder="Full Name*"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <input
              required
              type="email"
              placeholder="Email Address*"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <input
              required
              type="text"
              placeholder="Phone Number*"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <input
              required
              type="date"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <select
              defaultValue={"Choose Doctor"}
              className="select select-bordered w-full "
            >
              <option>Dr. Victoria Reynolds</option>
              <option>Dr. Jamal Khan</option>
              <option>Dr. Emily Chang</option>
              <option>Dr. Marcus Rodriguez</option>
              <option>Dr. Olivia Bennett</option>
            </select>
          </div>
          <div defaultValue={"Choose Clinic"} className="form-control w-full">
            <select className="select select-bordered w-full ">
              <option>Tranquil Wellness Hub</option>
              <option>Apex Care Clinic</option>
              <option>Serenity Medical Associates</option>
              <option>Harmony Health Center</option>
              <option>Wellness Haven Clinic</option>
            </select>
          </div>

          <div className="form-control w-full col-span-2">
            <textarea
              className="textarea textarea-bordered "
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button className="btn bg-orange-400 text-white border-none">
              Send Now
            </button>
          </div>
        </form>
      </div>
      <Brands></Brands>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Contact;
