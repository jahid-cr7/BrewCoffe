import React, { use } from "react";
import navImg from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";
import { Link } from "react-router";
import { AuthContext } from "../ContextAPI/AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { ToastContainer, toast } from "react-toastify";
const Header = () => {
  const { users, Logout } = use(AuthContext);
  console.log(users);
  const logoutUser = () => {
    Logout(auth)
      .then(() => {
        toast.success("SignOut Successfully!!!");
      })
      .catch((error) => {
        toast.error("Something Went Wrong", error);
      });
  };
  return (
    <div
      className="navbar shadow-sm"
      style={{
        backgroundImage: `url(${navImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex items-center gap-2">
          <img className="w-[50px]" src={logo} alt="" />
          <h1 className="text-3xl text-white rancho">Brew Coffee</h1>
        </div>
      </div>
      <div className="navbar-end mr-5">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link>
                {users ? (
                  <>
                    {" "}
                    <button onClick={logoutUser}>Sign Out</button>
                  </>
                ) : (
                  <Link to={"/signIn"}>Login</Link>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
