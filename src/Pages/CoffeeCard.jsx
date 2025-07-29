import React  from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffeeItem}) => {
 const {_id } = coffeeItem;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`https://brew-coffee-two.vercel.app/coffee/${_id}`, {
          method: "DELETE",
          headers: {},
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm flex flex-col lg:flex-row items-center justify-between p-4 rounded-lg">
      <figure>
        <img className="w-full h-[220px]" src={coffeeItem.photoURL} alt="Movie" />
      </figure>
      <div className="text-left lg:flex lg:items-center lg:gap-5 raleway">
        <div>
          {" "}
          <h2>
            <span className="font-bold text-[18px]">Name : </span>
            {coffeeItem.name}
          </h2>
          <p>
            <span className="font-bold text-[18px]">Chef : </span>
            {coffeeItem.chef}
          </p>
          <p>
            <span className="font-bold text-[18px] ">Price : </span>
            {coffeeItem.price}$
          </p>
        </div>
        <div className="flex flex-row lg:flex-row  items-center gap-4 justify-end lg:gap-3 mt-4">
          <Link
            to={`/coffee/${_id}`}
            className="mb-3 bg-[#D2B48C] text-white px-2 py-1 rounded-lg hover:bg-[#E3B577]"
          >
            {" "}
            <IoEyeOutline size={20}></IoEyeOutline>
          </Link>
          <Link to={`/update/${_id}`} className="bg-[#3C393B] text-white px-2 py-1 rounded-lg mb-3">
            <FaRegEdit size={20}></FaRegEdit>
          </Link>
          <Link
            onClick={() => handleDelete(coffeeItem._id)}
            className="bg-[#d1302d] text-white px-2 py-1 rounded-lg mb-3 hover:bg-[]"
          >
            {" "}
            <MdOutlineDeleteForever size={22}></MdOutlineDeleteForever>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
