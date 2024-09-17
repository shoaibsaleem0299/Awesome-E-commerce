import React from 'react'
import { Link } from 'react-router-dom'
import AppConstants from '../../../public/assets/constants/app_constant'

const ForgotPassword = () => {
    return (
        <>
            <div className="bg-gray-100 py-40">
                <div className="flex flex-col items-center justify-center   mx-auto ">
                    <Link to="/" className="flex items-center mr-4  mb-2 text-2xl font-extrabold text-black">
                        <img className="w-24  mr-2" src={AppConstants.logoImageUrl} alt="logo" />
                        Awesome E-Commerce
                    </Link>
                    <div className="w-full p-6 rounded-lg shadow  md:mt-0 sm:max-w-md sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                            Change Password
                        </h2>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Full Name"
                                    id="name"
                                />                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900" >New Password</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Full Name"
                                    id="name"
                                />                            </div>
                            <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Full Name"
                                    id="name"
                                />                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="newsletter" className="font-light text-gray-900 ">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset passwod</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword