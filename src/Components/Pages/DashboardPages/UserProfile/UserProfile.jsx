import useGetUser from "../../../../Hooks/getUser";
import bg from "../../../../assets/breadcrumb-bg.jpg";
import { SiNamecheap } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { FaLocationDot, FaMagnifyingGlassLocation } from "react-icons/fa6";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [upazila, setUpazila] = useState([]);
  const [district, setDistrict] = useState([]);
  const [isUser] = useGetUser();
  console.log(isUser);
  useEffect(() => {
    fetch("/upazila.json")
      .then((res) => res.json())
      .then((data) => setUpazila(data));
  }, []);
  useEffect(() => {
    fetch("/district.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);
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
              <input
                type="text"
                defaultValue={isUser?.name}
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdAttachEmail className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Email <br />
            <span className="text-lg font-semibold text-black">
              <input
                type="text"
                defaultValue={isUser?.email}
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdBloodtype className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Blood Group <br />
            <span className="text-lg font-semibold text-black">
              <select
                defaultValue={isUser?.bloodGroupe}
                className="select w-full max-w-xs"
              >
                <option disabled defaultValue={isUser?.bloodGroupe}>
                  {isUser?.bloodGroupe}
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            District <br />
            <span className="text-lg font-semibold text-black">
              <select
                defaultValue={isUser?.district}
                className="select w-full max-w-xs"
              >
                {district?.map((dis) => (
                  <option key={dis?.id} value={dis?.name}>
                    {dis?.name}
                  </option>
                ))}
              </select>
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaMagnifyingGlassLocation className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Upazila <br />
            <span className="text-lg font-semibold text-black">
              <select
                defaultValue={isUser?.upazila}
                className="select w-full max-w-xs"
              >
                {upazila?.map((dis) => (
                  <option key={dis?.id} value={dis?.name}>
                    {dis?.name}
                  </option>
                ))}
              </select>
            </span>
          </p>
        </div>
        <div className="">
          <button className="btn md:mt-3 md:ml-3 bg-[#34cceb] text-white">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
