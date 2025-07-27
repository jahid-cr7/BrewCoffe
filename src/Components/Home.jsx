import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import banner from "../assets/images/more/3.png";

import { BsCupHot } from "react-icons/bs";
import DisplayCoffee from "../Pages/DisplayCoffee";
import Gallery from "../Pages/Gallery";

const Home = () => {
  const Initialcoffee = useLoaderData();
  const [coffee, setCoffee] = useState(Initialcoffee);
  return (
    <div className="">
      <div className="relative">
        <img
          className="h-[250px] md:h-[400px] lg:h-[650px] w-full object-cover"
          src={banner}
          alt=""
        />
        <div className="absolute top-[20%] left-5 md:top-[20%] md:left-[65%] transform md:-translate-x-1/2 text-white max-w-[90%] md:max-w-[500px]">
          <h1 className="text-2xl md:text-3xl lg:text-5xl rancho mb-4 font-normal">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="raleway text-[10px] md:text-[12px] text-gray-200 lg:mb-6 mb-3">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="rancho lg:text-xl lg:px-5 lg:py-2 px-3 bg-[#E3B577] text-black rounded-2xl hover:bg-transparent hover:text-white border border-transparent transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-[#ECEAE3] px-4 md:px-16 lg:px-[200px] py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <img
            className="mb-4 mx-auto"
            src="https://i.ibb.co/VWdCXDWT/1.png"
            alt=""
          />
          <h3 className="rancho text-2xl md:text-3xl mb-2">Awesome Aroma</h3>
          <p className="raleway text-sm md:text-base">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img
            className="mb-4 mx-auto"
            src="https://i.ibb.co/rTQJH99/2.png"
            alt=""
          />
          <h3 className="rancho text-2xl md:text-3xl mb-2">High Quality</h3>
          <p className="raleway text-sm md:text-base">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img
            className="mb-4 mx-auto"
            src="https://i.ibb.co/v4N1tCD0/3.png"
            alt=""
          />
          <h3 className="rancho text-2xl md:text-3xl mb-2">Awesome Aroma</h3>
          <p className="raleway text-sm md:text-base">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img
            className="mb-4 mx-auto"
            src="https://i.ibb.co/chwqYGRh/4.png"
            alt=""
          />
          <h3 className="rancho text-2xl md:text-3xl mb-2">Awesome Aroma</h3>
          <p className="raleway text-sm md:text-base">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>

      {/* Add Coffee Section */}
      <DisplayCoffee coffee={coffee} setCoffee={setCoffee}></DisplayCoffee>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
