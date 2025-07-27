import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { Link, useLoaderData } from 'react-router';

const CoffeeShow = () => {
    const coffee = useLoaderData();
    const{name, photoURL, chef, supplier,category, taste, details, price } = coffee;
    console.log(coffee);
    
    return (
        <div className="card  bg-[#F5F4F1] shadow-xl max-w-6xl mx-auto my-10 py-16 px-20">
  <figure className="">
  <img
    src={photoURL}
    alt={name}
    className="h-[300px]"
  />
</figure>
  <div className="card-body raleway px-16 ">
    <h2 className="text-2xl"><span className='font-bold'>Name :</span> {name}</h2>
    <h2 className="text-xl"><span className='font-bold'>Chef :</span> {chef}</h2>
    <h2 className="text-xl"><span className='font-bold'>Supplier :</span> {supplier}</h2>
    <h2 className="text-xl"><span className='font-bold'>Category :</span> {category}</h2>
    <h2 className="text-xl"><span className='font-bold'>Taste :</span> {taste}</h2>
    <h2 className="text-xl"><span className='font-bold'>Details :</span> {details}</h2>
    <h2 className="text-xl"><span className='font-bold'>Price :</span> {price}$</h2>
    
    <div className="card-actions justify-end mt-5">
      <Link to={'/'} className="bg-[#E3B577] rancho px-4 py-2 rounded-2xl text-xl flex items-center gap-1 hover:border">Back to Home</Link>
    </div>
  </div>
</div>
    );
};

export default CoffeeShow;