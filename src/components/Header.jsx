import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React,{useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("sign in")
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile")
      } else {
        setPageState("Sign in")
      }
    })
    
  },[auth])

  function pathMatchRoute(route) {
  
    if (route === location.pathname) {
      console.log("Was called"+route);
      return true;
    } 
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
          <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo for realtor" srcset="" className='h-5 cursor-pointer' onClick={()=>navigate("/")} />
          </div>
          <div>
        <ul className='flex space-x-10'>
          <li className={`cursor-pointer  py-3 text-sm font-semibold  border-b-[3px]  ${pathMatchRoute('/')? "text-black border-b-red-500 " : 'border-b-transparent text-gray-400'}`} onClick={()=>navigate("/")} >Home</li>
          <li className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  ${pathMatchRoute('/offers')? "text-black border-b-red-500 " : 'border-b-transparent text-gray-400'}`} onClick={()=>navigate("/offers")} >Offers</li>
          <li className={`cursor-pointer py-3 text-sm font-semibold    ${(pathMatchRoute('/sign-in') || pathMatchRoute('/profile')) && "border-b-[3px] text-black border-b-red-500" }`} onClick={()=>navigate("/profile")} >{pageState}</li>
            </ul>
          </div>
      </header>
      </div>
  )
}

export default Header