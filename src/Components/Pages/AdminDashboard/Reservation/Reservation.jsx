import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import { useState } from "react";
import logo from "../../../../assets/PdLogo.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const hostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;
const Reservation = () => {
  const { register, handleSubmit } = useForm();
  const [id, setId] = useState(null);
  const [search, setSearch] = useState({});
  const axios = usePublicAxios();
  const { data: reservation = [], refetch } = useQuery({
    queryKey: ["reservation", search],
    queryFn: async () => {
      const res = await axios.get(`/reservation/admin?search=${search}`);
      return res.data.data;
    },
  });
  const searchHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);
  };

  const idHandler = (_id) => {
    setId(_id);
    document.getElementById("my_modal_1").showModal();
    console.log(_id);
    document.getElementById("appliedBtn").addEventListener("click", () => {
      document.getElementById("my_modal_1").close();
      // console.log("Clicked");
    });
  };

  //   const resultHandler = (e) => {
  //     e.preventDefault();
  //     const file = e.target.file.value;
  //     console.log(file);
  //   };
  const onSubmit = async (data) => {
    console.log(data);
    const image = { image: data.photo[0] };
    const res = await axios.post(hostingApi, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const updatedDoc = {
        image: res.data.data.display_url,
        status: "Delivered",
      };
      const response = await axios.patch(`/reservation/${id}`, updatedDoc);
      if (response.data.status === "success") {
        Swal.fire({
          title: "Test report uploaded successfully!",
          text: "Thank you!",
          icon: "success",
        });
        refetch();
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>PrimeDiag | Reservation</title>
      </Helmet>
      <DashboardTitle title={"Reservation"}></DashboardTitle>
      <form onSubmit={searchHandler} className="text-center my-3">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered rounded-r-none"
                placeholder="Search by email"
                name="search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item bg-[#34cceb] text-white">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th></th>
              <th>CLIENTS EMAIL</th>
              <th>TREATMENT</th>
              <th>BOOKING DATE</th>
              <th>BOOKING TIME</th>
              <th>STATUS</th>
              <th>UPLOAD TEST RESULT</th>
            </tr>
          </thead>
          <tbody>
            {reservation?.map((item, idx) => (
              <tr key={item._id} className="hover">
                <th>{idx + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.testName}</td>
                <td>{new Date(item?.date).toLocaleDateString()}</td>
                <td>{new Date(item?.date).toLocaleTimeString()}</td>
                <td>{item?.status}</td>
                <td>
                  {item?.status === "pending" ? (
                    <button
                      onClick={() => idHandler(item?._id)}
                      className="btn btn-sm text-white bg-red-500"
                    >
                      Upload
                    </button>
                  ) : (
                    <p>Result Delivered</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-semibold text-xl">Prime Diag</h1>
            <img className="w-12" src={logo} alt="" />
          </div>
          <div className=" space-y-3 p-3">
            <h1 className="font-semibold text-center">Upload Result</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-3"
            >
              <input
                {...register("photo")}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <input
                id="appliedBtn"
                type="submit"
                value="Submit"
                className="btn bg-[#34cceb]"
              />
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Reservation;
