import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, handleLogout } = useContext(authContext);

  return (
    <div className="text-center my-4">
      <div className="navbar w-11/12 mx-auto rounded-2xl p-2 text-black font-bold">
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
          <a className="text-2xl font-bold">
            Visa <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">Portal</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-visas">All Visas</NavLink>
          {user && <NavLink to="/add-visa">Add Visa</NavLink>}
          {user && <NavLink to="/my-added-visas">My Added Visas</NavLink>}
          {user && <NavLink to="/visa-application">My Visa Applications</NavLink>}
        </div>

        <div className="navbar-end flex items-center gap-4">
          {!user ? (
            <>
              <NavLink to="/login">
                <button className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6">
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
                    className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6"
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
