import React from 'react';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const AddCoffee = () => {
    const handleAddCoffee = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const category = event.target.category.value;
        const photoURL = event.target.photoURL.value;
        const chef = event.target.chef.value;
        const taste = event.target.taste.value;
        const details = event.target.details.value;
        const price = event.target.price.value;
        const coffee ={name, supplier, category, photoURL, chef, taste, details, price};
        console.log(coffee);
        fetch('http://localhost:3000/addcoffee', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(coffee),
        }).then(res => res.json()).then((data) => {
            console.log(data);
            if(data.insertedId){
                alert('Coffee Added Successfully');
                event.target.reset();
            }
        })
    }


    return (
       <div className='max-w-7xl mx-auto px-4'>
        <Link to={'/'} className='rancho mb-7 font-bold flex gap-3 items-center w-[200px] text-xl'><span><IoArrowUndoOutline></IoArrowUndoOutline></span>Back to Home</Link>
         <div className='bg-[#F4F3F0] pt-[60px] rounded-2xl '>
        
            
            <div className='text-center'>
                
                <h1 className='rancho text-[#374151] text-[45px] font-medium'>Add New Coffee</h1>
                <p className='text-center px-[25px] md:px-[50px] lg:px-[112px] raleway font-normal text-[12px] lg:text-[18px] text-[#1B1A1AB3]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>            
            </div>
            <div className='lg:max-w-6xl md:max-w-6xl mx-auto px-4'>
                <form onSubmit={handleAddCoffee} className="mx-auto mt-8 lg:grid md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter coffee name"
                                className="w-full px-4 py-2 rounded focus:outline-none focus:ring bg-white "
                                required
                            />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="supplier">Supplier</label>
                        <input
                            type="text"
                            id="supplier"
                            name="supplier"
                            placeholder="Enter supplier name"
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter category"
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Photo</label>
                        <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            placeholder="Photo URL"
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring lg:mb-0 md:mb-0 mb-5"
                            required
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
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="taste">Taste</label>
                        <input
                            type="text"
                            id="taste"
                            name="taste"
                            placeholder="Describe taste"
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="details">Details</label>
                        <textarea
                            id="details"
                            name="details"
                            placeholder="Enter details"
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring"
                            required
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
                            className="w-full px-4 py-2 bg-white rounded focus:outline-none focus:ring mb-5 lg:mb-0 md:mb-0"
                            required
                        />
                    </div>
                    
                </div>
                <div className='col-span-2'>
                    <input type="submit" value="Add Coffee" className="w-full bg-[#D2B48C] text-[#331A15] font-semibold py-2 px-4 rounded rancho hover:bg-[#C19A6B] transition duration-300 cursor-pointer hover:border" />
                </div>
            </form>
            </div>
        </div>
       </div>
    );
};

export default AddCoffee;