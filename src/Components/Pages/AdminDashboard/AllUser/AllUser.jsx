import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import { useState } from "react";

const AllUser = () => {
  const [showDetail, setShowDetail] = useState({});
  const axios = usePublicAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/user");
      return res.data.data;
    },
  });
  const detailHandler = (item) => {
    setShowDetail(item);
    document.getElementById("my_modal_1").showModal();
  };

  const makeAdminHandler = async (id) => {};
  return (
    <div>
      <DashboardTitle title={"All Users"}></DashboardTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users?.map((item, idx) => (
                <tr key={item?._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="font-bold">{item?.name}</div>
                  </td>
                  <td>{item?.email}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button
                      onClick={() => makeAdminHandler(item?._id)}
                      className="btn bg-[#34cceb] text-white btn-xs"
                    >
                      Make Admin
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => detailHandler(item)}
                      className="btn bg-[#34cceb] text-white btn-xs"
                    >
                      Details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Information</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box space-y-3">
            <img
              className="h-24 w-24 rounded-full border-2 border-[#34cceb] mx-auto"
              src={showDetail?.image}
              alt="user"
            />
            <h3 className="font-bold text-lg text-center">
              {showDetail?.name}
            </h3>
            <h3 className="font-bold text-lg">
              Blood Group: {showDetail?.bloodGroupe}
            </h3>
            <h3 className="font-bold text-lg">
              District: {showDetail?.district}
            </h3>
            <h3 className="font-bold text-lg">
              Upazila: {showDetail?.upazila}
            </h3>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn border-none bg-[#34cceb] text-white">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AllUser;
