import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            delay: 200,
            offset: 100,
          });
        AOS.refresh();
      }, []);
    return (
        <div>
            <div className="hero md:min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PxL5SJj/dgcover.jpg)'}}>
  <div className="hero-overlay bg-gradient-to-r from-blue-700 bg-opacity-40"></div>
  <div className=" text-start text-white py-5 px-2 md:p-0">
    <div className="container text-white lg:w-1/2 ">
        <p data-aos="fade-up" className="text-xl">Welcome To PrimeDiag</p>
      <h1 data-aos="fade-up" className="mb-5 text-3xl md:text-5xl font-bold">Your Health, Our Priority: PrimeDiag Diagnostic Center</h1>
      <p data-aos="fade-up" className="mb-5">At PrimeDiag, we redefine diagnostic excellence, combining cutting-edge technology with compassionate care. Our state-of-the-art facilities and expert team ensure accurate and swift results, empowering you to take control of your health journey. Discover a new era in healthcare with PrimeDiag.</p>
      <div data-aos="fade-down">
        <p className="md:text-xl"> Apply Code <span className="text-lg bg-white py-1 px-2 text-blue-600">PRIME30</span> for a 30% Exclusive Discount</p>
      </div>
      <button className="btn mt-3 border-blue-600 text-blue-600">All Tests</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;