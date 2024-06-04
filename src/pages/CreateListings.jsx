import React, { useState } from 'react'

function CreateListings() {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: "1",
        bathrooms: "1",
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: true,
        regularPrice: "10"
    })
    const { type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice } = formData;
    function onChange() {
        
    }
  return (
    <main className="max-w-md px-2 mx-auto">
          <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
          <form action="">
              <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
              <div className='flex items-center space-x-6 mb-6'>
                  <button type="button" id="type" value="Sell" onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"}`}>Sell</button>
                  <button type="button" id="type" value="Rent" onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === "rent" ? "bg-white text-black":"bg-slate-600 text-white"}`}>Rent</button>                  
              </div>
              <div className='mb-6 '>
                  <p className='text-lg font-semibold'>Name</p>
                  <input type="text" name="" id="name"  value={name} onChange={onChange} placeholder='Name' maxLength="32" minLength="10" required className='w-full px-4 py-2 text-xl text-gray-700 border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'/>
              </div>
              <div className="flex space-x-6 justify-start mb-6">
                  <div >
                      <p className="text-lg font-semibold">Beds</p>
                      <input type="number" name="" id="bedrooms" value={bedrooms} onChange={onChange} min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                  </div>
                  <div >
                      <p className="text-lg font-semibold">Bathrooms</p>
                      <input type="number" name="" id="bathrooms" value={bathrooms} onChange={onChange} min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                  </div>                  
              </div>
              <p className="text-lg mt-6 font-semibold">Parking Spot</p>
              <div className='flex items-center space-x-6 mb-6'>
                  <button type="button" id="parking" value={true} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking ? "bg-white text-black" : "bg-slate-600 text-white"}`}>Sell</button>
                  <button type="button" id="parking" value={false} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking? "bg-white text-black":"bg-slate-600 text-white"}`}>No</button>                  
              </div>
              
              <p className="text-lg mt-6 font-semibold">Furnished</p>
              <div className='flex items-center space-x-6 mb-6'>
                  <button type="button" id="furnished" value={true} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!furnished? "bg-white text-black" : "bg-slate-600 text-white"}`}>Yes</button>
                  <button type="button" id="furnished" value={false} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!furnished? "bg-white text-black":"bg-slate-600 text-white"}`}>No</button>                  
              </div>  
              <div className='mb-6 '>
                  <p className='text-lg font-semibold'>Address</p>
                  <textarea type="text" name="" id="address"  value={address} onChange={onChange} placeholder='Address'  required className='w-full px-4 py-2 text-xl text-gray-700 border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'/>
              </div>  
              <div className='mb-6 '>
                  <p className='text-lg font-semibold'>Description</p>
                  <textarea type="text" name="" id="description"  value={description} onChange={onChange} placeholder='Description'  required className='w-full px-4 py-2 text-xl text-gray-700 border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'/>
              </div>
              <p className="text-lg mt-6 font-semibold">Offer</p>
              <div className='flex items-center space-x-6 mb-6'>
                  <button type="button" id="offer" value={true} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!offer? "bg-white text-black" : "bg-slate-600 text-white"}`}>Yes</button>
                  <button type="button" id="offer" value={false} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!offer? "bg-white text-black":"bg-slate-600 text-white"}`}>No</button>                  
              </div>   
              <div className="">
                  <div className="">
                      <p className="text-lg mt-6 font-semibold">Regular Price</p>
                      <input type="number" name="" id="regularPrice" value={regularPrice} onChange={onChange} min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                  </div>
              </div>
          </form>
    </main>
  )
}

export default CreateListings