import { NavLink } from "react-router";
import "./Navbar.css"

const Navbar = () => {
    const navbar = <>
  
        <NavLink><li className=" border-2 border-white py-2 px-5 rounded-[8px] duration-300 hover:border-[#23BE0A] hover:font-semibold hover:text-[#23BE0A]">Home</li></NavLink>
        <NavLink><li className=" border-2 border-white py-2 px-5 rounded-[8px] duration-300 hover:border-[#23BE0A] hover:font-semibold hover:text-[#23BE0A]">Listed Books</li></NavLink>
        <NavLink><li className=" border-2 border-white py-2 px-5 rounded-[8px] duration-300 hover:border-[#23BE0A] hover:font-semibold hover:text-[#23BE0A]">Pages to Read</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 WorkSans px-15 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg space-x-4">
                        {navbar}
                    </ul>
                </div>
                <h1 className="text-3xl font-bold text-[#131313]">Book Vibe</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 text-lg space-x-4">
                   {navbar}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <a className="btn px-[28px] py-[24px] text-xl font-semibold text-white bg-[#23BE0A] rounded-[8px]">Sign In</a>
                <a className="btn px-[28px] py-[24px] text-xl font-semibold text-white bg-[#59C6D2] rounded-[8px]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;