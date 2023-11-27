import bg from "../../../assets/breadcrumb-bg.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiPhone } from "react-icons/ci";
import GoogleMapReact from "google-map-react";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
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
        <div className="card  bg-sky-100">
          <div className="card-body text-center">
            <h2 className="">
              <CiLocationOn className="bg-[#34cceb] text-white mx-auto text-7xl rounded-full" />
            </h2>
            <p className="text-2xl font-semibold">Our Location</p>
            <p>House #5, Street Number #98, brasilia- 70000-000, Brazil.</p>
          </div>
        </div>
        <div className="card bg-sky-100 ">
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
        <div className="card bg-sky-100 ">
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
      <div className="container mx-auto my-20">
        <div style={{ height: "100vh", width: "50%" }}>
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
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Contact;
