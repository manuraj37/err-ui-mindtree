import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Headers() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route) {
        if(route === location.pathname){
            return true
        }
        return false
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto' >
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/1920px-Service_mark.svg.png" alt='logo' className="h-8 cursor-pointer"  onClick= {()=> navigate("/")} /> 
            </div>
            <div>
                <ul className='flex justify-center space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}  onClick= {()=> navigate("/")}  >Home</li>
                </ul>
            </div>
        </header>

    </div>
  )
}
