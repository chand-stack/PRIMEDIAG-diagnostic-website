import { useParams } from "react-router-dom";
import bg from "../../../assets/breadcrumb-bg.jpg";
import logo from "../../../assets/PdLogo.png";
import img from "../../../assets/Group (3).svg";
import img1 from "../../../assets/Mastercard.svg";
import img2 from "../../../assets/UPI.svg";
import img3 from "../../../assets/Visa.svg";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import { useQuery } from "@tanstack/react-query";
import { MdRoundaboutRight } from "react-icons/md";
import Faq from "../../Shared/Faq/Faq";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import { useState } from "react";
import useBanner from "../../../Hooks/useBanner";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);
const Detail = () => {
  const [banner] = useBanner();
  const activeBanner = banner?.filter((item) => item.isActive === true);
  // console.log(activeBanner[0]);
  const publicAxios = usePublicAxios();
  const [amount, setAmount] = useState(null);
  const { id } = useParams();
  const { data: testDetail = {}, refetch } = useQuery({
    queryKey: ["testDetail", id],
    queryFn: async () => {
      const res = await publicAxios.get(`/service/${id}`);
      return res.data.data;
    },
  });

  const paymentModalHandler = () => {
    if (testDetail.slot === 0) {
      Swal.fire({
        title: "Fully booked right now.",
        text: "Try again soon!",
        icon: "error",
      });
      return;
    }
    setAmount(testDetail.price);
    document.getElementById("my_modal_1").showModal();
    document.getElementById("appliedBtn").addEventListener("click", () => {
      document.getElementById("my_modal_1").close();
      // console.log("Clicked");
    });
  };

  const promoHandler = (e) => {
    console.log(e.target.value);
    if (activeBanner[0].couponcode === e.target.value) {
      const discountedAmount = (activeBanner[0].couponrate / 100) * amount;
      const afterDiscount = amount - discountedAmount;
      setAmount(afterDiscount);
    } else {
      setAmount(testDetail.price);
    }
  };

  return (
    <div className="font-poppin bg-gray-100">
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
            Test Deatils
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="md:flex items-center my-10">
          <div className="md:w-1/2 text-center">
            <h1 className="text-[#34cceb] text-lg md:text-2xl font-medium flex-grow flex justify-center items-center gap-3">
              <MdRoundaboutRight />
              PRIME DIAG
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-black">
              {testDetail?.name}
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="font-medium text-gray-600">{testDetail?.details}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-10 gap-5">
          <div className="">
            <img
              className="rounded-xl mx-auto md:h-60 lg:h-80 px-2 md:px-0"
              src={testDetail?.image}
              alt="test"
            />
          </div>
          <div className="px-2 md:px-0 space-y-4 max-h-80">
            <div className="">
              <p className="font-medium text-xl">
                <span className="text-black font-semibold lg:text-2xl">
                  The last available date:
                </span>{" "}
                {new Date(testDetail?.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex-grow">
              <p className="font-medium text-xl">
                <span className="text-black font-semibold lg:text-2xl">
                  Available Slot:
                </span>{" "}
                {testDetail?.slot}
              </p>
            </div>
            <div className="flex-grow">
              <p className="font-medium text-xl">
                <span className="text-black font-semibold lg:text-2xl">
                  Cost:
                </span>{" "}
                ${testDetail?.price}
              </p>
            </div>
            <button
              onClick={paymentModalHandler}
              className="btn bg-[#34cceb] text-white"
            >
              Book Now
            </button>
          </div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-blue-950 text-white">
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-semibold text-xl">Prime Diag</h1>
                <img className="w-12" src={logo} alt="" />
              </div>
              <div className=" p-3">
                <h1 className="font-medium">Apply PROMOCODE</h1>
                <input
                  onChange={promoHandler}
                  type="text"
                  placeholder="Promo"
                  className="input input-bordered w-full max-w-xs text-black"
                />
              </div>
              <div className=" px-3">
                <h1 className="font-medium">Amount: ${amount}</h1>
              </div>
              <div>
                <Elements stripe={stripePromise}>
                  <CheckOut
                    amount={amount}
                    testDetail={testDetail}
                    refetch={refetch}
                  ></CheckOut>
                </Elements>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex flex-col items-center">
                  <p className="text-white font-medium text-lg -mb-3">Pay</p>
                  <img className="h-12 w-12" src={img} alt="" />
                </div>
                <div>
                  <img className="h-12 w-12" src={img1} alt="" />
                </div>
                <div>
                  <img className="h-12 w-12" src={img2} alt="" />
                </div>
                <div>
                  <img className="h-12 w-12" src={img3} alt="" />
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Detail;
