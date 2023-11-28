import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import { useState } from "react";
import Swal from "sweetalert2";

const AllUser = () => {
  const [showDetail, setShowDetail] = useState({});
  const [search, setSearch] = useState({});
  const axios = usePublicAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await axios.get(`/user?search=${search}`);
      return res.data.data;
    },
  });
  const detailHandler = (item) => {
    setShowDetail(item);
    document.getElementById("my_modal_1").showModal();
  };

  const makeAdminHandler = async (id) => {
    console.log(id);
    const makingAdmin = { role: "isAdmin" };
    const res = await axios.patch(`/user/${id}`, makingAdmin);
    if (res.data.status === "success") {
      Swal.fire({
        title: "Congratulations!",
        text: "The user is now an admin",
        icon: "success",
      });
      refetch();
    }
  };
  const blockHandler = async (id) => {
    Swal.fire({
      title: "Blocking this user cannot be undone.!",
      text: "Are you sure you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Block it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const blockUser = { status: "block" };
        axios.patch(`/user/${id}`, blockUser).then((res) => {
          if (res.data.status === "success") {
            Swal.fire({
              title: "User blocked!",
              text: "User successfully blocked.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  return (
    <div>
      <DashboardTitle title={"All Users"}></DashboardTitle>
      <div>
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
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </form>
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
                <th>Action</th>
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
                    {item?.role === "isAdmin" ? (
                      <button
                        onClick={() => makeAdminHandler(item?._id)}
                        className="btn bg-[#34cceb] text-white btn-xs"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <p>Admin</p>
                    )}
                  </td>
                  {item.status === "active" ? (
                    <td>
                      {item?.role === "isAdmin" ? (
                        <button
                          onClick={() => blockHandler(item?._id)}
                          className="btn bg-[#34cceb] text-white btn-xs"
                        >
                          Block User
                        </button>
                      ) : (
                        <p>Admin</p>
                      )}
                    </td>
                  ) : (
                    <td>Blocked</td>
                  )}
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
