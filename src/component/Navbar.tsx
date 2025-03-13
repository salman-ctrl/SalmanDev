import { useNavigate } from 'react-router-dom'
import React from 'react'



const Navbar = () => {
    const navigate = useNavigate();

    const handleHire = () => {
        navigate('/hire')
    }
    const handleHome = () => {
        navigate("/")
    }
    const handleAchievment = () => {
        navigate("/achievment")
    }

    return (
        <nav className="w-full h-20 flex flex-row pt-20 px-16 justify-between items-center text-white text-2xl z-50">
            <div className="flex items-center space-x-12 justify-evenly w-[70vh] h-20">
                <button onClick={handleHome} className="h-20 w-20 cursor-pointer">
                    <img src="/assets/logo.png" alt="logo" className="h-full w-full" />
                </button>

                <div className='border-2 border-white px-16 py-3 rounded-[50px]' >
                    <ul className="flex space-x-16 font-medium">
                        <li>
                            <button onClick={handleAchievment} className="hover:text-blue-500 transition duration-200 cursor-pointer">Achievment</button>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">Showcase</a>
                        </li>
                    </ul>
                </div>
            </div>

            <button onClick={handleHire} className="h-14 px-8 bg-white shadow-md text-black transition duration-500 rounded-lg hover:bg-gray-700 hover:text-sky-200 shadow-gray-500 hover:scale-105 hover:border-sky-400 hover:border ">
                Hire Me!
            </button>

        </nav >

    )
}


export default Navbar;
