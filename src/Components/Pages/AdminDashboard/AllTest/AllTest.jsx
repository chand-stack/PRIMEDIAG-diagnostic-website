import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSecureAxios from "../../../../useAxios/useSecureAxios";

const AllTest = () => {
  const axios = usePublicAxios();
  const secureAxios = useSecureAxios();
  const { data: tests, refetch } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axios.get("/service");
      return res.data.data;
    },
  });
  console.log(tests);
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        secureAxios.delete(`/service/${id}`).then((res) => {
          if (res.data.status == "success") {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <DashboardTitle title={"All Tests"}></DashboardTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Test</th>
                <th>Test Name</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tests?.map((item, idx) => (
                <tr key={item?._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Cost</div>
                        <div className="text-sm opacity-50">${item?.price}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>
                    <button
                      onClick={() => deleteHandler(item._id)}
                      className="btn btn-sm text-white bg-red-600"
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                  <th>
                    <Link
                      to={`/dashboard/update/${item?._id}`}
                      className="btn btn-sm text-white bg-blue-600"
                    >
                      Update
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Test</th>
                <th>Test Name</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTest;
