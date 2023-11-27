import img from "../../../assets/brand-01.png";
import img1 from "../../../assets/brand-02.png";
import img2 from "../../../assets/brand-03.png";
import img3 from "../../../assets/brand-04.png";
import img4 from "../../../assets/brand-05.png";
const Brands = () => {
  return (
    <div className="container mx-auto px-10 flex flex-wrap my-20">
      <div className="border-2 p-5 flex-grow">
        <img src={img} alt="" />
      </div>
      <div className="border-2 p-5 flex-grow">
        <img src={img1} alt="" />
      </div>
      <div className="border-2 p-5 flex-grow">
        <img src={img2} alt="" />
      </div>
      <div className="border-2 p-5 flex-grow">
        <img src={img3} alt="" />
      </div>
      <div className="border-2 p-5 flex-grow">
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default Brands;
