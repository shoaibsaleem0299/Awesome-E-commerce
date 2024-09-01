import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export const Header = () => {
    return (
        <div className='flex flex-row justify-around items-center bg-gray-50'>
            <div className='p-2 w-1/4'>
                <Link className='flex items-center text-2xl font-bold'>
                    <img
                        src="https://e-commerce-webapp.netlify.app/static/media/logo.f6581c63.png"
                        alt="Awesome Ecommerce"
                        className='w-24'
                    />Awesome E-commerce</Link>
            </div>
            <nav>
                <ul className='flex items-center'>
                    <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='/' className={({isActive}) => `${isActive ? "text-blue-400" : "text-black"}`}>Home</NavLink></li>
                    <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='/shop' className={({isActive}) => `${isActive ? "text-blue-400" : "text-black"}`}>Shop</NavLink></li>
                    <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='categories' className={({isActive}) => `${isActive ? "text-blue-400" : "text-black"}`}>Categories</NavLink></li>
                    <li className='py-2 px-1 font-semibold text-xl mx-2'><NavLink to='quickfind' className={({isActive}) => `${isActive ? "text-blue-400" : "text-black"}`}>Quick Find</NavLink></li>
                </ul>
            </nav>
            <div className="flex items-center justify-center w-1/4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="w-44 py-4 pl-16 pr-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 placeholder-gray-400"
                        placeholder="Search ..."
                    />
                </div>
                <div className='bg-gray-100 rounded-full p-4 mx-6'>
                    <i className="fa-solid fa-cart-shopping text-2xl"></i>
                    <span className="absolute top-8 right-24 bg-pink-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        1
                    </span>
                </div>
                <div className='bg-gray-100 rounded-full p-4'>
                    <i className="fa-regular fa-heart text-3xl"></i>
                </div>
            </div>
        </div>
    )
}
