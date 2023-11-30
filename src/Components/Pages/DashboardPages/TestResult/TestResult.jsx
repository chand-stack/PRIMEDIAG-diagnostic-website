import { Helmet } from "react-helmet-async";
import useAppointm from "../../../../Hooks/useAppointm";
import DashboardTitle from "../../../Shared/DashboardTitle/DashboardTitle";
import download from "downloadjs";

const TestResult = () => {
  const [reservation] = useAppointm();
  const pendingAppoint = reservation.filter(
    (item) => item.status === "Delivered"
  );
  console.log(pendingAppoint);
  const handleDownload = (url, filename) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        download(blob, filename);
      })
      .catch((error) => console.error("Download failed", error));
  };
  return (
    <div>
      <Helmet>
        <title>PrimeDiag | Test Result</title>
      </Helmet>
      <DashboardTitle title={"Test Results"}></DashboardTitle>
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
                <th>DOWNLOAD TEST RESULT</th>
              </tr>
            </thead>
            <tbody>
              {pendingAppoint.map((item, idx) => (
                <tr key={item._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{item?.testName}</td>
                  <td>{new Date(item?.date).toLocaleDateString()}</td>
                  <td>{new Date(item?.date).toLocaleTimeString()}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button
                      className="btn btn-sm text-white bg-green-500"
                      onClick={() => handleDownload(item?.image, "result.jpg")}
                    >
                      Download
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

export default TestResult;
