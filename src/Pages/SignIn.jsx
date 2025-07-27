import React, { use, useState } from 'react';
import { Link } from 'react-router';

import sidePic from '../assets/images/more/2.png'
import { AuthContext } from '../ContextAPI/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";

const SignIn = () => {
  const { SignInUser, googleSignIn } = use(AuthContext);
  const [showpassword, setShowPassword] = useState(false);
  const signInUserHandle = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const remember = event.target.remember.checked;
    console.log(email, password);
    if (!remember) {
      toast.error("Please Accept our Terms and Conditions");
      return;
    }
    SignInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        if (!user.emailVerified) {
          toast.error("Please verify your email address before signing in.");
          return;
        }
        toast.success("User Sign In Successfully!!!");
        event.target.reset();
      })
      .catch((error) => {
        toast.error("Email and Password is Invalid", error);
      });
  };
  const signInwithGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("User Sign In by Google is Successfully!!!");
      })
      .catch((error) => {
        toast.error("Something went wrong!!!", error);
      });
  };

  return (
    <div className="lg:min-h-screen mt-10 flex lg:items-center justify-center  text-balck p-4 lg:mt-10 lg:mx-0 md:mx-20">
      <div className="w-full max-w-5xl bg-[#edebe4] rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row ">
        {/* Left Side Image */}
        <div className="lg:w-1/2 bg-[#382828] hidden lg:block">
          <img
            src={sidePic} // You can replace this
            alt="Signup illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-10 lg:mt-16">
          <h2 className="text-4xl  font-bold mb-2 rancho">
            Sign In Your Account
          </h2>
          <p className="text-sm mb-6 text-black raleway">
            Already have an account?{" "}
            <Link to={"/signUp"} className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>

          <form onSubmit={signInUserHandle} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="raleway input w-full bg-white text-black border-none placeholder-gray-400 p-3 rounded-md"
            />

            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input w-full bg-white border-none text-black placeholder-gray-400 p-3 rounded-md raleway "
              />
              <button
                onClick={() => setShowPassword(!showpassword)}
                type="button"
                className="absolute top-3 right-6"
              >
                {showpassword ? (
                  <LuEyeOff className="text-gray-500" />
                ) : (
                  <MdOutlineRemoveRedEye className="text-gray-500" />
                )}
              </button>
            </div>

            <label className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                name="remember"
                className="form-checkbox text-purple-500"
              />
              <span className="ml-2 text-sm text-black">Remember Me</span>
            </label>

            <input
              type="submit"
              value="Login Now"
              className="w-full bg-[#382828] hover:bg-[#382828] text-white font-semibold py-3 rounded-md mt-4 cursor-pointer raleway"
            />
            <ToastContainer />
          </form>

          <div className="mt-2 text-center text-gray-400 text-sm">
            Or Login with
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={signInwithGoogle}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
            >
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="Google"
              />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;