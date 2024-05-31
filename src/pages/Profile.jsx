import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const { name, email } = formData;
  function onLogout() {
    
    auth.signOut();
    navigate("/")
  }
  return (
    <>
      <section >
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 mx-auto'>
          <form >
            <input type="text" name="name" id="name" value={name} className='w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mb-6' disabled/>
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mb-6' type="email" name="" id="email" value={email} disabled />   
            
            <div className='flex justify-between text-sm md:text-lg whitespace-nowrap'>
              <p className='flex items-center'>Do you want to change your name? <span className='text-red-600 hover:text-red-700 transition ease-in-out duration-100 ml-1 cursor-pointer'>Edit</span></p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-100 cursor-pointer'>Sign out</p>
            </div>
          </form>
        </div>
      </section></>
  )
}

export default Profile