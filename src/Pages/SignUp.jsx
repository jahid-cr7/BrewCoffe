import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import sideImg from "../assets/images/more/6.png";
import { AuthContext } from "../ContextAPI/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUp = () => {
  const { CreateUser, verifyEmail } = use(AuthContext);
  const [showpassword, setShowPassword] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    console.log(email, password);
    const terms = form.terms.checked;

    if (!terms) {
      alert("Please Accept out Term and Condition");
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}/;
    if (passwordRegex.test(password) === false) {
      toast.error(
        "Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    CreateUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      const rest = {
        email,
        ...userProfile,
        creationTime: result.user.metadata.creationTime,
        lastSignInTime: result.user.metadata.lastSignInTime,
      };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rest),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Account Created Successfully!!!", data);
          }
          verifyEmail(user)
            .then((result) => {
              toast.success(
                "Please verify your email address to complete the registration process.",
                result
              );
              form.reset();
            })
            .catch((error) => {
              toast.error("Failed to send verification email", error);
            });
        })
        .catch((error) => {
          toast.error("Email has already used", error);
        });
      form.reset();
    });
  };
  return (
    <div className="lg:min-h-screen mt-10 flex lg:items-center justify-center  text-balck p-4 lg:mt-10 lg:mx-0 md:mx-20">
      <div className="w-full max-w-5xl bg-[#edebe4] rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row ">
        {/* Left Side Image */}
        <div className="lg:w-1/2 bg-[#382828] hidden lg:block">
          <img
            src={sideImg} // You can replace this
            alt="Signup illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-10 lg:mt-34">
          <h2 className="text-4xl  font-bold mb-2 rancho">Create an Account</h2>
          <p className="text-sm mb-6 text-black raleway">
            Already have an account?{" "}
            <Link to={"/signIn"} className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="input w-full bg-white text-black placeholder-gray-400 p-3 rounded-md border-none raleway"
              />
            </div>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoURL"
              required
              className="raleway input w-full bg-white text-black border-none placeholder-gray-400 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="raleway input w-full bg-white text-black border-none placeholder-gray-400 p-3 rounded-md"
            />

            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="input w-full bg-white border-none text-black placeholder-gray-400 p-3 rounded-md raleway"
              />
              <button
                className="absolute top-3 right-6"
                type="button"
                onClick={() => setShowPassword(!showpassword)}
              >
                {showpassword ? (
                  <IoEyeOffOutline className="text-black" />
                ) : (
                  <IoEyeOutline className="text-black" />
                )}
              </button>
            </div>

            <label className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                name="terms"
                className="form-checkbox text-purple-500"
              />
              <span className="ml-2 text-sm text-black">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  terms & conditions
                </a>
              </span>
            </label>

            <input
              type="submit"
              value="Create Account"
              className="w-full bg-[#382828] hover:bg-[#382828] text-white font-semibold py-3 rounded-md mt-4 cursor-pointer rancho"
            />
            <ToastContainer />
          </form>

          {/* <div className="mt-6 text-center text-gray-400 text-sm">Or register with</div> */}

          {/* <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
              <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
              Google
            </button>
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
