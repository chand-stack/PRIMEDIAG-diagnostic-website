import { useForm } from 'react-hook-form';
import img from '../../../assets/19836.jpg'
import logo from '../../../assets/PdLogo.png'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
const {loginUser} = useContext(AuthContext)

const navigate = useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = async (data) => {
        const email = data.email
        const password = data.password
        console.log(email,password)
    loginUser(email,password).then((res)=>{console.log(res);
        Swal.fire({
            title: "Welcome back!",
            text: " It's great to see you again at PRIME DIAG.",
            icon: "success"
          });
    navigate("/")
    }).catch(err => {console.log(err);
        Swal.fire({
            title: "Invalid login credentials. Please try again!",
            text: "invalid-login-credentials",
            icon: "error"
          });
    })
    }

    return (
       <div className='bg-gray-50 w-full h-screen'>
         <div className="container mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 font-poppin bg-gray-50">
            <div className=' px-5'>
            <div className='max-w-md mx-auto space-y-4'>
            <div className='flex items-center gap-2'>
        <h1 className='font-semibold text-xl'>Prime Diag</h1>
        <img className='w-12' src={logo} alt="" />
    </div>
    <h1 className='text-2xl font-bold'>Welcome</h1>
    <p className='font-medium text-gray-500'>Enter your email And password to sign in</p>
    <form onSubmit={handleSubmit(onSubmit)}>
       
    <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input required type="email" {...register("email")} placeholder="email" className="input input-bordered w-full" />
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input required type="password" {...register("password")} placeholder="password" className="input input-bordered w-full " />
  
</div>


      <input className='btn w-full mt-3 text-white bg-blue-600 hover:bg-blue-800' type="submit" />
    </form>
    <button className='btn w-full border-2 btn-outline border-blue-600 text-blue-600'><FcGoogle className='text-xl'/>Sign in with Google</button>
    <p className='text-gray-500 text-center'>Don&lsquo;t have an account? <Link to="/register" className='font-semibold text-blue-600'>Sign Up</Link> </p>
            </div>
            </div>
            <div className='md:p-5'>
                <img className='w-full object-center rounded-xl' src={img} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Login;