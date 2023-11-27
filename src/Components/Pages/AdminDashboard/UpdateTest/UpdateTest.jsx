import { useState } from "react";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpdateTest = () => {
  const axios = usePublicAxios();
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();

  const { id } = useParams();
  const { data: testDetail = {} } = useQuery({
    queryKey: ["testDetail", id],
    queryFn: async () => {
      const res = await axios.get(`/service/${id}`);
      return res.data.data;
    },
  });
  console.log(testDetail);

  const onSubmit = async (data) => {
    const name = data.name || testDetail?.name;
    const image = data.image || testDetail?.image;
    const details = data.details || testDetail?.details;
    const slot = parseInt(data.slot) || testDetail?.slot;
    const price = parseInt(data.price) || testDetail?.price;
    const date = startDate;
    // console.log(name,image,details,slot,price,date);
    const testDetail = {
      name: name,
      image: image,
      details: details,
      slot: slot,
      price: price,
      date: date,
    };
    const res = await axios.patch(`/service/${testDetail?._id}`, testDetail);
    if (res.data.status == "success") {
      Swal.fire({
        title: "Success!",
        text: "The product updated successfully.",
        icon: "success",
      });
    }
    console.log(testDetail);
  };
  return (
    <div>
      <DashboardTitle title={"Update Test Info"}></DashboardTitle>
      <div>
        <div className=" px-5 ">
          <div className="max-w-md mx-auto space-y-4 bg-slate-50 px-3 mt-3 py-3 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Test Name</span>
                </label>
                <input
                  defaultValue={testDetail?.name}
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
                  defaultValue={testDetail?.image}
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
                  defaultValue={testDetail?.details}
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
                    defaultValue={testDetail?.slot}
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
                  defaultValue={testDetail?.price}
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
                Update Test
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTest;
