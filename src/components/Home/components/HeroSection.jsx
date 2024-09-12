import React from 'react'

export const HeroSection = () => {
    return (
        <section className='flex h-screen mt-6 items-center justify-center'>
            <div className="bg-[url('/assets/images/bg-1.png')] text-center w-[95%]  mx-auto px-10 py-32 rounded-[70px] ">
                <h1 className="lg:text-6xl  font-extrabold text-white mb-4">
                    Get <span className="text-blue-500">Best Products</span> With Lowest Price.
                </h1>
                <p className="text-white lg:text-xl  lg:font-semibold my-6">
                    Empower your shopping experience with seamless browsing, exclusive deals, and fast, secure checkout <br />
                    <span className="text-blue-500">welcome to the future of online shopping!</span>
                </p>
                <button className="bg-blue-500 text-white lg:font-bold md:font-light py-3 px-6 rounded-full hover:bg-white hover:text-blue-900 transition-all">
                    Explore Now
                    <i className="fas fa-arrow-right-from-bracket ml-3 bg-blue-700 text-white p-3 rounded-full hover:bg-white hover:text-blue-900 transition-all"></i>
                </button>
            </div>
        </section>
    )
}
