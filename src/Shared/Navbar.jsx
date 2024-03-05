import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo-1c5fad08-removebg-preview(1).png";
import useAuth from "../Hooks/useAuth";
const NavBar = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const {user, logOut} = useAuth()

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/ "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold border-b-2" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="">About</div>
        <ul tabIndex={0} className=" dropdown-content z-[10] p-2 shadow bg-gray-800 md:bg-base-200 rounded-box w-52 mt-4">
          <li><Link to='/about'>About CBPI</Link></li> 
          <li><Link to='https://www.facebook.com/coxpoly74009'>Official Facebook Page</Link></li>
          <li><Link to='/mission'>Mission & Vision </Link></li>
          <li><Link to='/routine'>Class Routine </Link></li>
          <li>
        <NavLink
          to="/student"
         
        >
          Student Information
        </NavLink>
      </li>
        </ul>
      </div>
    

      <li>
        <NavLink
          to="/teacher"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          Teachers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          Photo Gallery
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  const [navbar, setNavbar] = useState(false);
  return (
    <div className=" border-b-2 text-white relative">
      {/* For Mobile View  */}
      <motion.div
        animate={navbar ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween" }}
        className={`fixed h-screen  bg-green-700 font-semibold top-0 px-10 py-10 md:hidden flex flex-col gap-4 z-50 
        ${navbar ? "left0" : "-translate-x-full"}
        `}
      >
        {navLinks}
      </motion.div>
      <nav className="w-[85%] md:w-[95%] lg:w-[85%] mx-auto flex items-center justify-between py-2 text-black font-semibold">
        <img
          className="w-20 md:w-28 lg:w-24 bg-white px-3 py-1 rounded-full"
          src={logo}
          alt=""
        />
        <div className="hidden md:flex items-center justify-center list-none gap-4">
          {navLinks}
        </div>
        <div>
          <div className="block md:hidden">
            <div
              onClick={() => {
                setNavbar(!navbar);
              }}
              className=""
            >
              {navbar ? (
                <LiaTimesSolid   onClick={() => setNavbar(false)}
                className="text-2xl duration-300 active:scale-75 cursor-pointer select-none"></LiaTimesSolid>
              ) : (
                <HiOutlineBars3BottomRight className="text-2xl duration-300 active:scale-75 cursor-pointer select-none"></HiOutlineBars3BottomRight>
              )}
            </div>
          </div>
        </div>
        <div className="invisible lg:visible">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
      </nav>
    </div>
  );
};

export default NavBar;
