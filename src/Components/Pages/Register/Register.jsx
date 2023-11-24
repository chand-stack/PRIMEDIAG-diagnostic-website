import { useForm } from 'react-hook-form';
import img from '../../../assets/19836.jpg'
import logo from '../../../assets/PdLogo.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser,updateUser} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = async (data) => {
        const name = data.name
        const photo = data.photo
        const email = data.email
        const password = data.password
        if(password.length<6){
            Swal.fire({
                title: "Please choose a stronger password.!",
                text: "Password must be at least 6 characters long",
                icon: "error"
              });
              return
        }
        if(!/^(?=.*[a-z])/.test(password)){
            Swal.fire({
                title: "Please choose a stronger password.!",
                text: "Password must contain at least one lowercase letter",
                icon: "error"
              });
              return
        }
        if(!/(?=.*[A-Z])/.test(password)){
            Swal.fire({
                title: "Please choose a stronger password.!",
                text: "Password must contain at least one uppercase letter",
                icon: "error"
              });
              return
        }
        if(!/(?=.*[!@#$%^&*])/.test(password)){
            Swal.fire({
                title: "Please choose a stronger password.!",
                text: "Password must contain at least one special character",
                icon: "error"
              });
              return
        }

        createUser(email,password)
        .then((res)=>{
            console.log(res.user);
            Swal.fire({
                title: "Welcome to PRIME DIAG!",
                text: "Your account has been created successfully",
                icon: "success"
              });
            updateUser(name,photo).then(res => {console.log(res)}).catch(err => {console.log(err)})
        })
        .catch(err=>{
            console.log(err);
            Swal.fire({
                title: "Email-already-in-use. Please try again!",
                text: "email-already-in-use",
                icon: "error"
              });
        })
        
        console.log(name,photo,email,password)}

    return (
        <div className='bg-gray-50 w-full h-screen'>
         <div className="container mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 font-poppin bg-gray-50">
            <div className=' px-5'>
            <div className='max-w-md mx-auto space-y-4'>
            <div className='flex items-center gap-2'>
        <h1 className='font-semibold text-xl'>Prime Diag</h1>
        <img className='w-12' src={logo} alt="" />
    </div>
    <h1 className='text-2xl font-bold'>Sign up</h1>
    <p className='font-medium text-gray-500'>Enter your information to sign up</p>
    <form onSubmit={handleSubmit(onSubmit)}>
       
    <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input required type="text" {...register("name")} placeholder="email" className="input input-bordered w-full" />
  
</div>
    <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo url</span>
  </label>
  <input required type="url" {...register("photo")} placeholder="email" className="input input-bordered w-full" />
  
</div>
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
    <p className='text-gray-500 text-center'>Already have an account? <Link to="/login" className='font-semibold text-blue-600'>Login</Link> </p>
            </div>
            </div>
            <div className='md:p-5'>
                <img className='w-full object-center rounded-xl' src={img} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Register;