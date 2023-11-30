import { useForm } from "react-hook-form";
import logo from "../../../assets/PdLogo.png";
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import { Helmet } from "react-helmet-async";

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const hostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;
const Register = () => {
  const publicAxios = usePublicAxios();
  const { createUser, updateUser } = useContext(AuthContext);
  const [upazila, setUpazila] = useState([]);
  const [district, setDistrict] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("upazila.json")
      .then((res) => res.json())
      .then((data) => setUpazila(data));
  }, []);
  useEffect(() => {
    fetch("district.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmpassword;
    const image = { image: data.photo[0] };
    const blood = data.blood;
    const upazila = data.upazila;
    const district = data.district;
    if (password.length < 6) {
      Swal.fire({
        title: "Please choose a stronger password.!",
        text: "Password must be at least 6 characters long",
        icon: "error",
      });
      return;
    }
    if (!/^(?=.*[a-z])/.test(password)) {
      Swal.fire({
        title: "Please choose a stronger password.!",
        text: "Password must contain at least one lowercase letter",
        icon: "error",
      });
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      Swal.fire({
        title: "Please choose a stronger password.!",
        text: "Password must contain at least one uppercase letter",
        icon: "error",
      });
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      Swal.fire({
        title: "Please choose a stronger password.!",
        text: "Password must contain at least one special character",
        icon: "error",
      });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match. Please try again.",
        text: "Double-check and try once more.",
        icon: "error",
      });
      return;
    }
    const res = await publicAxios.post(hostingApi, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      createUser(email, password)
        .then((response) => {
          console.log(response.user);
          Swal.fire({
            title: "Welcome to PRIME DIAG!",
            text: "Your account has been created successfully",
            icon: "success",
          });
          navigate("/");
          updateUser(name, res.data.data.display_url)
            .then((respo) => {
              console.log(respo);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Email-already-in-use. Please try again!",
            text: "email-already-in-use",
            icon: "error",
          });
        });
      const userInfo = {
        name: name,
        image: res.data.data.display_url,
        email: email,
        bloodGroupe: blood,
        upazila: upazila,
        district: district,
        status: "active",
      };
      console.log(userInfo);
      const resUser = await publicAxios.post("/user", userInfo);
      console.log(resUser.data);
    }

    console.log(name, photo, email, password, image, upazila, district, blood);
  };

  return (
    <div className="bg-gray-50 w-full">
      <Helmet>
        <title>PrimeDiag | SignUp</title>
      </Helmet>
      <div className="container mx-auto pt-10 font-poppin bg-gray-50">
        <div className=" px-5">
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-xl">Prime Diag</h1>
              <img className="w-12" src={logo} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Sign up</h1>
            <p className="font-medium text-gray-500">
              Enter your information to sign up
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4"
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
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
                  <span className="label-text">Your avatar/photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo")}
                  className="file-input file-input-bordered w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your blood groupe</span>
                </label>
                <select
                  {...register("blood")}
                  className="select select-bordered w-full "
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <select
                  {...register("district")}
                  className="select select-bordered w-full "
                >
                  {district?.map((dis) => (
                    <option key={dis?.id} value={dis?.name}>
                      {dis?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Upazila</span>
                </label>
                <select
                  {...register("upazila")}
                  className="select select-bordered w-full "
                >
                  {upazila?.map((upaz) => (
                    <option key={upaz?.id} value={upaz?.name}>
                      {upaz?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  required
                  type="password"
                  {...register("confirmpassword")}
                  placeholder="password"
                  className="input input-bordered w-full "
                />
              </div>

              <input
                className="btn col-span-2 w-full mt-3 text-white bg-blue-600 hover:bg-blue-800"
                type="submit"
              />
            </form>
            {/* <button className="btn w-full border-2 btn-outline border-blue-600 text-blue-600">
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button> */}
            <p className="text-gray-500 text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-600">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
