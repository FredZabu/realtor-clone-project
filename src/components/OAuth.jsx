import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { db } from '../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';
function OAuth() {
    const navigate = useNavigate();
  async  function onGoogleAuth(e) {
        e.preventDefault();
      try {
            // signing in the user
            const auth = getAuth();
            const provider = GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            // checking whether the user exists in the database
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef)
            
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
                navigate("/")
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    return (
        <button type='button' onClick={onGoogleAuth} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded '>
            <FcGoogle className='text-2xl bg-white mr-2' />
            Continue with Google
        </button> 
  )
    
}

export default OAuth;