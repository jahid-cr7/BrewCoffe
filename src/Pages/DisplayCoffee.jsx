import React from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

import { Link, Links } from "react-router";
import CoffeeCard from "./CoffeeCard";

const DisplayCoffee = ({ coffee }) => {
  return (
    <div className="bg-[url('https://i.ibb.co/1GgjHzXV/1.png')] bg-[position:0px_20px] bg-cover min-h-screen">
      <section className="lg:mt-[125px]">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="text-center mt-20 mb-10">
            <p className="lg:text-[20px] text-[#1B1A1A]">---Sip & Savor---</p>
            <h2 className="rancho text-[40px] lg:text-[55px] text-[#331A15]">
              Our Popular Products
            </h2>
            <Link
              className="rancho text-[14px] lg:text-[20px] text-white  bg-[#E3B577] hover:text-[#331A15] px-4 py-2 rounded-2xl text-2xl hover:border"
              to="/AddCoffee"
            >
              Add Coffee
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
              {coffee.map((coffeeItem) => (
                <CoffeeCard key={coffeeItem._id}  coffeeItem={coffeeItem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayCoffee;
