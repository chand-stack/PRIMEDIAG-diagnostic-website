import useGetUser from "../../../../Hooks/getUser";
import bg from "../../../../assets/breadcrumb-bg.jpg";
import { SiNamecheap } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { FaLocationDot, FaMagnifyingGlassLocation } from "react-icons/fa6";

const UserProfile = () => {
  const [isUser] = useGetUser();
  console.log(isUser);
  return (
    <div className="font-poppin">
      <div
        className=""
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#34cceb] bg-opacity-60 flex justify-center items-center">
          <img
            className="h-32 w-32 border-4 border-[#34cceb] rounded-full my-3"
            src={isUser?.image}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-5 md:w-1/2 mx-auto gap-5 mt-8">
        <div className="flex items-center gap-2">
          <SiNamecheap className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Name <br />
            <span className="text-lg font-semibold text-black">
              {isUser?.name}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdAttachEmail className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Email <br />
            <span className="text-lg font-semibold text-black">
              {isUser?.email}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdBloodtype className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Blood Group <br />
            <span className="text-lg font-semibold text-black">
              {isUser?.bloodGroupe}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            District <br />
            <span className="text-lg font-semibold text-black">
              {isUser?.district}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaMagnifyingGlassLocation className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Upazila <br />
            <span className="text-lg font-semibold text-black">
              {isUser?.upazila}
            </span>
          </p>
        </div>
        <div className="">
          <button className="btn bg-[#34cceb] text-white">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
