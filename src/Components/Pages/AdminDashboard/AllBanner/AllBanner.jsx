import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import useBanner from "../../../../Hooks/useBanner";
import { Helmet } from "react-helmet-async";

const AllBanner = () => {
  const axios = usePublicAxios();
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [, refetch] = useBanner();

  const { data: banner, refetch: refresh } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axios.get("/banner");
      return res?.data;
    },
  });

  const handleCheckboxClick = (itemId) => {
    setSelectedBanner(itemId === selectedBanner ? null : itemId);
  };
  const changeBannerHandler = async (id) => {
    const unselectedBanner = banner?.data?.filter((item) => item._id !== id);
    const unselectedIds = {
      Ids: unselectedBanner.map((item) => item._id),
    };
    const updatedDoc = {
      isActive: true,
    };
    const response = await axios.patch(`/banner/${id}`, updatedDoc);
    if (response.data.status === "success") {
      axios.patch("/banner", unselectedIds).then((res) => {
        if (res.data.status === "success") {
          Swal.fire({
            title: "Selected!",
            text: "Your banner has been Selected.",
            icon: "success",
          });
          refetch();
        }
      });
    }
  };

  const bannerDeleteHandler = (id) => {
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
        axios.delete(`/banner/${id}`).then((res) => {
          if (res.data.status == "success") {
            refresh();
            Swal.fire({
              title: "Deleted!",
              text: "Your banner has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>PrimeDiag | All Banner</title>
      </Helmet>
      <DashboardTitle title={"All Banner"}></DashboardTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Select Banner</th>
                <th>Banner Img</th>
                <th>Title</th>
                <th>Coupon Code</th>
                <th>Coupon Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {banner?.data?.map((item) => (
                <tr key={item._id}>
                  <th>
                    <label>
                      <input
                        onChange={() => handleCheckboxClick(item._id)}
                        type="checkbox"
                        className="checkbox"
                        checked={selectedBanner === item._id}
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.image} alt="Banner" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.title}</td>
                  <td>{item?.couponcode}</td>
                  <td>{item?.couponrate}%</td>
                  <th>
                    <button
                      onClick={() => bannerDeleteHandler(item?._id)}
                      className="btn text-white bg-red-500 btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Select Banner</th>
                <th>Banner Img</th>
                <th>Title</th>
                <th>Coupon Code</th>
                <th>Coupon Rate</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
          <div className="text-center mt-5">
            {selectedBanner && (
              <button
                onClick={() => changeBannerHandler(selectedBanner)}
                className="btn bg-[#34cceb] text-white"
              >
                Save Change
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBanner;
