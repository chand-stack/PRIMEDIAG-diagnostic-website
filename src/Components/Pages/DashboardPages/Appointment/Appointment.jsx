import Swal from "sweetalert2";
import useAppointm from "../../../../Hooks/useAppointm";
import usePublicAxios from "../../../../useAxios/usePublicAxios";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";

const Appointment = () => {
  const axios = usePublicAxios();
  const [reservation, refetch] = useAppointm();
  const pendingAppoint = reservation.filter(
    (item) => item.status === "pending"
  );
  const cancelHandler = async (id) => {
    console.log(id);
    const res = await axios.delete(`/reservation/${id}`);
    if (res.data.status === "success") {
      Swal.fire({
        title: "Appointment canceled!",
        text: "If you need to reschedule or have questions, please contact us. Thank you.",
        icon: "success",
      });
      refetch();
    }
  };
  return (
    <div>
      <DashboardTitle title={"Upcoming Appointments"}></DashboardTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th></th>
                <th>TREATMENT</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>STATUS</th>
                <th>CANCEL APPOINTMENT</th>
              </tr>
            </thead>
            <tbody>
              {pendingAppoint.map((item, idx) => (
                <tr key={item._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{item?.testName}</td>
                  <td>{new Date(item?.date).toLocaleDateString()}</td>
                  <td>{new Date(item?.date).toLocaleTimeString()}</td>
                  <td>Pending</td>
                  <td>
                    <button
                      onClick={() => cancelHandler(item._id)}
                      className="btn btn-sm text-white bg-red-500"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
