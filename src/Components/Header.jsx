import React from "react";
import navImg from "../assets/images/more/15.jpg"
import logo from "../assets/images/more/logo1.png";
const Header = () => {
  return (
    <div className="">
        <div className="relative">
            <img className="w-full h-[60px]" src={navImg} alt="" />
        </div>
      <div className="absolute -top-3.5 left-0 right-0  py-4">
        
        <h1 className="rancho text-white text-3xl flex items-center justify-center gap-3"> <img className="w-12" src={logo} alt="" /> Brew Coffee</h1>
      </div>
    </div>
  );
};

export default Header;
