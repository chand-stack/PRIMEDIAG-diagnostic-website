import { useForm } from "react-hook-form";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import usePublicAxios from "../../../../useAxios/usePublicAxios";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const hostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;
const AddBanner = () => {
  const publicAxios = usePublicAxios();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const image = { image: data.photo[0] };
    const details = data.description;
    const title = data.title;
    const couponcode = data.couponcode;
    const couponrate = parseInt(data.couponrate);
    console.log(name, image, details, title, couponcode, couponrate);
    // const testDetail = {
    //   name: name,
    //   image: image,
    //   details: details,
    //   slot: slot,
    //   price: price,
    // };
    const res = await publicAxios.post(hostingApi, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // const res = await axios.post("/service", testDetail);
    // if (res.data.status == "success") {
    //   Swal.fire({
    //     title: "Success!",
    //     text: "The product has been added successfully.",
    //     icon: "success",
    //   });
    // }
    console.log(res.data.data.display_url);
  };
  return (
    <div>
      <DashboardTitle title={"Add Banner"}></DashboardTitle>
      <div>
        <div className=" px-5 ">
          <div className="max-w-md mx-auto space-y-4 bg-slate-50 px-3 mt-3 py-3 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  required
                  type="text"
                  {...register("name")}
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Upload Banner Image</span>
                </label>
                <input
                  type="file"
                  {...register("photo")}
                  className="file-input file-input-bordered w-full "
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold">Title</span>
                  </label>
                  <input
                    required
                    type="text"
                    {...register("title")}
                    placeholder="slot"
                    className="input input-bordered w-full "
                  />
                </div>
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  {...register("description")}
                  className="textarea textarea-bordered"
                  placeholder="Details"
                ></textarea>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">
                    Coupon Code Name
                  </span>
                </label>
                <input
                  required
                  type="text"
                  {...register("couponcode")}
                  placeholder="price"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Coupon Rate</span>
                </label>
                <input
                  required
                  type="text"
                  {...register("couponrate")}
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

export default AddBanner;
