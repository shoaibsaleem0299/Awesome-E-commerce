import React from 'react'
import { Link } from 'react-router-dom'
import AppConstants from '../../../public/assets/constants/app_constant'


export const Footer = () => {
  return (


    <footer className="rounded-t-3xl shadow bg-gray-300  text-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link className='flex items-center text-2xl font-bold'>
            <img
              src = {AppConstants.logoImageUrl}
              alt="Awesome Ecommerce"
              className='w-32'
            />
            <span className="hidden md:inline">Awesome E-commerce</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-bold text-black sm:mb-0 ">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center">© 2024 <Link href="/" className="hover:underline">AwesomeEcommerce™</Link>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}
