import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../firebase';
import { doc,updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcHome } from "react-icons/fc";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const [changeDetail, setChangeDetail] = useState(false);
  const { name, email } = formData;

  function onLogout() {    
    auth.signOut();
    navigate("/")
  }
  function onChangeValue(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      }
    })
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.name !== name) {
        // update display name in the firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        // update name in the firebase
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {name})
      }
      toast.success("Profile Updated!")
    } catch (error) {
      toast.error("Failed!")
    }
  }
  return (
    <>
      <section >
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 mx-auto'>
          <form  >
            <input type="text" name="name" id="name" value={name} onChange={onChangeValue} className={`w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mb-6 ${changeDetail && "bg-red-200 focus:bg-red-200"}`} disabled={!changeDetail} />
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mb-6' type="email" name="" id="email" value={email} disabled={!changeDetail} />   
            
            <div className='flex justify-between text-sm md:text-lg whitespace-nowrap'>
              <p className='flex items-center'>Do you want to change your name? <span onClick={() => {
                changeDetail && onSubmit()
                setChangeDetail((prevState) => !prevState)
              }} className='text-red-600 hover:text-red-700 transition ease-in-out duration-100 ml-1 cursor-pointer'>{changeDetail ? "Apply changes" : "Edit"}</span></p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-100 cursor-pointer'>Sign out</p>
            </div>
          </form>
          <button type="submit" className='mt-4 w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>
            <Link to="/create-listings" className='flex justify-center items-center'>
              <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1 border-2' />
              Sell or Rent your home
            </Link>
          </button>
        </div>
      </section></>
  )
}

export default Profile