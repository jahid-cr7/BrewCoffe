import React from "react";
import logo from "../assets/images/more/logo1.png";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="lg:flex items-center bg-[#ECEAE3] py-10 justify-between lg:px-32 md:px-10 mt-12">
      <div className="lg:px-16 px-5">
        <img className="w-15" src={logo} alt="" />
        <h1 className="rancho text-[45px] font-normal text-[#331A15]">
          Brew Coffee
        </h1>
        <p className="raleway text-[14px] lg:text-[16px] mb-4">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-3 mt-2 mb-2">
          <FaFacebook className="text-[#331A15]" size={24}></FaFacebook>
          <FaTwitter className="text-[#331A15]" size={24}></FaTwitter>
          <SiInstagram className="text-[#331A15]" size={24}></SiInstagram>
          <FaLinkedin className="text-[#331A15]" size={24}></FaLinkedin>
        </div>
        <h1 className="rancho text-3xl text-[#331A15] mb-1.5">Get in Touch</h1>
        <p className="raleway text-[14px] lg:text-[16px] flex items-center gap-4 mb-1">
          <FaPhoneAlt></FaPhoneAlt> +88 01533 333 333
        </p>
        <p className="raleway text-[14px] lg:text-[16px] flex items-center gap-4 mb-1">
          <CiMail></CiMail> info@gmail.com
        </p>
        <p className="raleway text-[14px] lg:text-[16px] flex items-center gap-4 mb-1">
          <IoLocationSharp></IoLocationSharp> 72, Wall street, King Road, Dhaka
        </p>
      </div>

      <div className="px-5 mt-4">
        <h1 className="rancho text-4xl">Connect with Us</h1>
        <form action="">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="lg:w-[400px] w-[300px] placeholder:text-[12px]  lg:placeholder:text-[14px] px-4 py-2 mb-3 mt-3 bg-white rounded focus:outline-none "
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="lg:w-[400px] w-[300px] placeholder:text-[12px]  lg:placeholder:text-[14px] px-4 py-2 mb-3 bg-white rounded focus:outline-none"
          />
          <br />
          <textarea
            type="text"
            id="message"
            name="message"
            className="lg:w-[400px] w-[300px] placeholder:text-[12px]  lg:placeholder:text-[14px] px-4 py-2 mb-3 bg-white rounded focus:outline-none "
            placeholder="Message"
          ></textarea>
          <br />
          <button className="rancho bg-[#E3B577] text-black px-4 py-2 rounded-2xl hover:border-2 border border-transparent ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
