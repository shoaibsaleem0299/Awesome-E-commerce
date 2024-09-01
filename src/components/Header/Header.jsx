import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50">
            {/* Mobile Drawer */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col h-full p-6">
                    <button onClick={toggleDrawer} className="text-white text-3xl mb-6">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <input
                        type="text"
                        className="w-full py-2 px-4 rounded-full shadow-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 placeholder-gray-400"
                        placeholder="Search ..."
                    />
                    <nav>
                        <ul className="flex flex-col">
                            <li className="py-2 text-white"><NavLink to='/' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"}`}>Home</NavLink></li>
                            <li className="py-2 text-white"><NavLink to='/shop' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"}`}>Shop</NavLink></li>
                            <li className="py-2 text-white"><NavLink to='categories' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"}`}>Categories</NavLink></li>
                            <li className="py-2 text-white"><NavLink to='quickfind' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-gray-300"}`}>Quick Find</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Desktop Header */}
            <div className="w-full flex items-center justify-between md:justify-around p-2">
                <button onClick={toggleDrawer} className="md:hidden text-2xl">
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className='flex items-center w-full md:w-1/4 justify-center md:justify-start'>
                    {!isOpen && (
                        <Link className='flex items-center text-2xl font-bold'>
                            <img
                                src="https://e-commerce-webapp.netlify.app/static/media/logo.f6581c63.png"
                                alt="Awesome Ecommerce"
                                className='w-24'
                            />
                            <span className="hidden md:inline">Awesome E-commerce</span>
                        </Link>
                    )}
                </div>

                <nav className={`hidden md:flex ${isOpen ? 'hidden' : 'flex'}`}>
                    <ul className='flex items-center justify-center'>
                        <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='/' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-black"}`}>Home</NavLink></li>
                        <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='/shop' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-black"}`}>Shop</NavLink></li>
                        <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='categories' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-black"}`}>Categories</NavLink></li>
                        <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='quickfind' className={({ isActive }) => `${isActive ? "text-blue-400" : "text-black"}`}>Quick Find</NavLink></li>
                    </ul>
                </nav>

                <div className={`flex items-center md:w-1/4 justify-center md:justify-end space-x-4 ${isOpen ? 'hidden' : 'flex'}`}>
                    <div className='bg-gray-100 rounded-full p-4 relative'>
                        <i className="fa-solid fa-cart-shopping text-2xl"></i>
                        <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                            1
                        </span>
                    </div>
                    {!isOpen && (
                        <div className='bg-gray-100 rounded-full p-4 hidden md:flex'>
                            <i className="fa-regular fa-heart text-3xl"></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
