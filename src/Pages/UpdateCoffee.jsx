import React from 'react';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const coffeeData = useLoaderData();
    const { name, supplier, category, photoURL, chef, taste, details, price } = coffeeData;
    const handleEdit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const formdata = new FormData(form)
        const coffeeInputData = Object.fromEntries(formdata.entries());
        console.log(coffeeInputData);
        fetch(`https://brew-coffee-two.vercel.app/update/${coffeeData._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(coffeeInputData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              alert("Coffee Updated Successfully");
              form.reset();
            }
          });
      
    }
    return (
        <div className='max-w-7xl mx-auto px-4'>
        <Link to={'/'} className='rancho mb-7 font-bold flex gap-3 items-center w-[200px] text-xl'><span><IoArrowUndoOutline></IoArrowUndoOutline></span>Back to Home</Link>
         <div className='bg-[#F4F3F0] pt-[60px] rounded-2xl '>
        
            
            <div className='text-center'>
                
                <h1 className='rancho text-[#374151] text-[45px] font-medium'>Update Existing Coffee Details</h1>
                <p className='text-center px-[25px] md:px-[50px] lg:px-[112px] raleway font-normal text-[12px] lg:text-[18px] text-[#1B1A1AB3]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>            
            </div>
            <div className='lg:max-w-6xl md:max-w-6xl mx-auto px-4'>
                <form onSubmit={handleEdit} className="mx-auto mt-8 lg:grid md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter coffee name"
                                defaultValue={name}
                                className="w-full px-4 py-2 rounded focus:outline-none focus:ring bg-white "
                            />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="supplier">Supplier</label>
                        <input
                            type="text"
                            id="supplier"
                            name="supplier"
                            placeholder="Enter supplier name"
                            defaultValue={supplier}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter category"
                            defaultValue={category}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Photo</label>
                        <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            placeholder="Photo URL"
                            defaultValue={photoURL}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring lg:mb-0 md:mb-0 mb-5"
                        />
                    </div>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-6 ">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="chef">Chef</label>
                        <input
                            type="text"
                            id="chef"
                            name="chef"
                            placeholder="Enter chef name"
                            defaultValue={chef}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="taste">Taste</label>
                        <input
                            type="text"
                            id="taste"
                            name="taste"
                            placeholder="Describe taste"
                            defaultValue={taste}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="details">Details</label>
                        <textarea
                            id="details"
                            name="details"
                            placeholder="Enter details"
                            defaultValue={details}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                            rows={1}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 -mt-2" htmlFor="taste">Price</label>
                        <input
                            type="number"
                            id="taste"
                            name="price"
                            placeholder="Set Price"
                            defaultValue={price}
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring mb-5 lg:mb-0 md:mb-0"
                        />
                    </div>
                    
                </div>
                <div className='col-span-2'>
                    <input type="submit" value="Update Coffee" className="w-full bg-[#D2B48C] text-[#331A15] font-semibold py-2 px-4 rounded rancho hover:bg-[#C19A6B] transition duration-300 cursor-pointer hover:border" />
                </div>
            </form>
            </div>
        </div>
       </div>
    );
};

export default UpdateCoffee;