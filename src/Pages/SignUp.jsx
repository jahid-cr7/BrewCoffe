import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import sideImg from '../assets/images/more/6.png'
import { AuthContext } from '../ContextAPI/AuthContext';
 import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router';



const SignUp = () => {
    const {CreateUser} = use(AuthContext);
  

    const handleSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    console.log(name, email, password);
    if(!terms){
        alert('Please Accept out Term and Condition')
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}/;
        if (passwordRegex.test(password) === false) {
          toast.error(
            "Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
          );
          return
        }
    CreateUser(email, password)
    .then(result => {
        console.log(result.user);
        toast.success('Account Created Successfully!!!')
    }).catch(error => {
        toast.error("Email has already used", error)
    })



}
    return (
       

    <div className="lg:min-h-screen mt-10 flex lg:items-center justify-center  text-balck p-4 lg:mt-10 lg:mx-0 md:mx-20">
      <div className="w-full max-w-5xl bg-[#edebe4] rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row ">
        {/* Left Side Image */}
        <div className="lg:w-1/2 bg-[#382828] hidden lg:block">
          <img
            src={sideImg}// You can replace this
            alt="Signup illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-10 lg:mt-34">
          <h2 className="text-4xl  font-bold mb-2 rancho">Create an account</h2>
          <p className="text-sm mb-6 text-black raleway">
            Already have an account? <Link to={'/signIn'} className="text-blue-500 hover:underline">Log in</Link>
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Name" name='name' className="input w-full bg-white text-black placeholder-gray-400 p-3 rounded-md border-none raleway" />
              
            </div>

            <input type="email" placeholder="Email" name='email' className="raleway input w-full bg-white text-black border-none placeholder-gray-400 p-3 rounded-md" />

            <input type="password" name='password' placeholder="Enter your password" className="input w-full bg-white border-none text-black placeholder-gray-400 p-3 rounded-md raleway" />

            <label className="inline-flex items-center mt-2">
              <input type="checkbox" name='terms' className="form-checkbox text-purple-500" />
              <span className="ml-2 text-sm text-black">I agree to the <a href="#" className="text-blue-500 hover:underline">terms & conditions</a></span>
            </label>

            <input type="submit" value="Create Account" className="w-full bg-[#382828] hover:bg-[#382828] text-white font-semibold py-3 rounded-md mt-4 cursor-pointer raleway" />
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