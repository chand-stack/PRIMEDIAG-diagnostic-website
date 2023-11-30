import { useForm } from "react-hook-form";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddTest = () => {
  const axios = usePublicAxios();
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const image = data.image;
    const details = data.details;
    const slot = parseInt(data.slot);
    const price = parseInt(data.price);
    const date = startDate;
    // console.log(name,image,details,slot,price,date);
    const testDetail = {
      name: name,
      image: image,
      details: details,
      slot: slot,
      price: price,
      date: date,
      booking: 0,
    };
    const res = await axios.post("/service", testDetail);
    if (res.data.status == "success") {
      Swal.fire({
        title: "Success!",
        text: "The product has been added successfully.",
        icon: "success",
      });
    }
    console.log(testDetail);
  };
  return (
    <div className="font-poppin">
      <Helmet>
        <title>PrimeDiag | Add Test</title>
      </Helmet>
      <DashboardTitle title={"Add A Test"}></DashboardTitle>
      <div>
        <div className=" px-5 ">
          <div className="max-w-md mx-auto space-y-4 bg-slate-50 px-3 mt-3 py-3 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Test Name</span>
                </label>
                <input
                  required
                  type="text"
                  {...register("name")}
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Image url</span>
                </label>
                <input
                  required
                  type="url"
                  {...register("image")}
                  placeholder="image url"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Details</span>
                </label>
                <textarea
                  {...register("details")}
                  className="textarea textarea-bordered"
                  placeholder="Details"
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold">Date</span>
                  </label>
                  <DatePicker
                    className="z-0"
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold">Slot</span>
                  </label>
                  <input
                    required
                    type="number"
                    {...register("slot")}
                    placeholder="slot"
                    className="input input-bordered w-full "
                  />
                </div>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Price</span>
                </label>
                <input
                  required
                  type="text"
                  {...register("price")}
                  placeholder="price"
                  className="input input-bordered w-full "
                />
              </div>

              <button
                type="submit"
                className="btn w-full mt-3 text-white bg-blue-600 hover:bg-blue-800"
              >
                Add Test
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTest;
