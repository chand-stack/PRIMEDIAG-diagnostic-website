import { Link } from "react-router-dom";
import logo from "../../../assets/PdLogo.png";
import { FaHospitalUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-black w-full font-poppin">
      <footer className="footer container mx-auto p-10 text-neutral-content">
        <nav className="space-y-3">
          <div className="flex items-center gap-2">
            <header className=" text-white text-2xl lg:text-3xl font-bold">
              PRIMEDIAG
            </header>
            <img className="w-12" src={logo} alt="" />
          </div>
          <p className="text-white">
            Unveiling Tomorrow&lsquo;s Diagnostics Today: <br /> Welcome to
            PrimeDiag
          </p>
          <div className="flex gap-2">
            <FaHospitalUser className="text-[#34cceb] text-5xl rounded-full bg-white p-1"></FaHospitalUser>
            <div>
              <p className="text-white text-xl font-bold">Opening Hours</p>
              <p className="text-gray-400">
                Mon – Sat 8:00 – 17:30 Sunday – CLOSED
              </p>
            </div>
          </div>
        </nav>
        <nav>
          <header className="text-white text-lg lg:text-2xl  font-semibold">
            Quick Link
          </header>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> About
          </Link>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Home
          </Link>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Service
          </Link>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Contact
          </Link>
        </nav>
        <nav>
          <header className="text-white text-lg lg:text-2xl font-semibold">
            Support Desk
          </header>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Teams
          </Link>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Careers
          </Link>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Feedback
          </Link>
          <Link className="font-semibold lg:text-lg">
            <span className="text-[#34cceb]">.</span> Privacy policy
          </Link>
        </nav>
        <nav>
          <header className="text-white text-lg lg:text-2xl font-semibold">
            Social
          </header>
          <p className="font-semibold lg:text-lg flex items-center gap-1">
            <FaLocationDot className="text-[#34cceb]" />
            711-2880 Nulla St.
          </p>
          <p className="font-semibold lg:text-lg flex items-center gap-1">
            <MdEmail className="text-[#34cceb]" />
            example@gmail.com
          </p>
          <p className="font-semibold lg:text-lg flex items-center gap-1">
            <BiSolidPhoneCall className="text-[#34cceb]" />
            +964 742 44 763
          </p>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-[#34cceb] text-white">
        <aside>
          <p>© All Copyright 2023 by PRIMEDIAG</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
