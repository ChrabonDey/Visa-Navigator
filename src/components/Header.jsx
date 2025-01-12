import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import img1 from '../assets/rb_82523.png'

const Header = () => {
  const { user, handleLogout } = useContext(authContext);

  return (
    <div className="text-center">
      <div className="navbar  rounded-2xl  text-black font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-visas">All Visas</NavLink>
              {user && <NavLink to="/add-visa">Add Visa</NavLink>}
              {user && <NavLink to="/my-added-visas">My Added Visas</NavLink>}
              {user && <NavLink to="/my-visa-applications">My Visa Applications</NavLink>}
            </ul>
          </div>
            <div className="flex items-center gap-3">
              <img src={img1} alt="" className="w-8 h-8 "/>
               <div className="font-bold text-3xl">
                <span className="primary">Visa</span> <span className="secondary">Portal</span>
               </div>
            </div>
        </div>

        <div className="navbar-center hidden lg:flex gap-4 ">
          <NavLink className='hover:text-[#696B9A]'  to="/">Home</NavLink>
          <NavLink className='hover:text-[#696B9A]' to="/all-visas">All Visas</NavLink>
          <NavLink className='hover:text-[#696B9A]' to="/about">About Us</NavLink>
          <NavLink className='hover:text-[#696B9A]' to="/visatips">Visa Tips</NavLink>
          <NavLink className='hover:text-[#696B9A]' to="/testimonial">Testimonial</NavLink>

          {user && <NavLink className='hover:text-[#696B9A]' to="/add-visa">Add Visa</NavLink>}
          {user && <NavLink className='hover:text-[#696B9A]' to="/my-added-visas">My Added Visas</NavLink>}
          {user && <NavLink className='hover:text-[#696B9A]' to="/visa-application">My Visa Applications</NavLink>}
        </div>

        <div className="navbar-end flex items-center gap-4">
          {!user ? (
            <>
              <NavLink to="/login">
                <button className="btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out">
                  Register
                </button>
              </NavLink>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar cursor-pointer"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    title={user.displayName || "User"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 shadow"
              >
                <li>
                  <span>{user.displayName || user.email}</span>
                </li>
                <li>
                  <button
                    onClick={async () => {
                      await handleLogout();
                      console.log("Logout button clicked");
                    }}
                    className="btn bg-[#1e1e60] text-white px-6 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
