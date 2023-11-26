import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import { useState } from "react";

const AllBanner = () => {
  const axios = usePublicAxios();
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  const { data: banner } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axios.get("/banner");
      return res?.data;
    },
  });
  console.log(banner?.data);
  return (
    <div>
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
                        onClick={() => setIsActive(!isActive)}
                        type="checkbox"
                        className="checkbox"
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
                    <button className="btn text-white bg-red-500 btn-xs">
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
        </div>
      </div>
    </div>
  );
};

export default AllBanner;
