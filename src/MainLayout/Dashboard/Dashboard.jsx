import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/PdLogo.png'

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="lg:w-1/4 border-2 border-red-600">
            <div className='hidden lg:flex items-center gap-2 justify-center py-5'>
        <h1 className='font-semibold text-xl'>PrimeDiag</h1>
        <img className='w-12' src={logo} alt="" />
    </div>
             <div className="hidden lg:contents">
             <ul className="menu-vertical min-h-full space-y-4">
             
             <li className="btn w-full text-lg btn-sm rounded-xl"><NavLink
 to="profile"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-blue-600 text-white w-full h-full rounded-xl" : ""}>Profile</NavLink></li>
             <li className="btn w-full text-lg btn-sm rounded-xl"><NavLink
 to="appointments"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline text-blue-600" : ""}>Upcoming Appointments</NavLink></li>
             <li className="btn w-full text-lg btn-sm rounded-xl"><NavLink
 to="testresults"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline text-blue-600" : ""}>Test results</NavLink></li>
 <li className="btn w-full text-lg btn-sm rounded-xl"><NavLink
 to="/"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline text-blue-600" : ""}>Home</NavLink></li>
             </ul>
             </div>
             <div className="lg:hidden">
             <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 space-y-4 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><NavLink
 to="profile"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-blue-600 text-white w-full h-full rounded-xl" : ""}>Profile</NavLink></li>
      <li><NavLink
 to="appointments"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-blue-600 text-white w-full h-full rounded-xl" : ""}>Upcoming Appointments</NavLink></li>
      <li><NavLink
 to="testresults"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-blue-600 text-white w-full h-full rounded-xl" : ""}>Test results</NavLink></li>
      <li><NavLink
 to="/"
 className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-blue-600 text-white w-full h-full rounded-xl" : ""}>Home</NavLink></li>
      
    </ul>
  
  </div>
</div>
</div>
            </div>
            <div className="w-full lg:w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;