import React from 'react';

const Home = () => {
  return (
    <section >
      <div className="bg-[url('/assets/images/bg-1.png')] w-[95%] h-screen mx-auto px-10 pt-32 rounded-[70px]">
        {/* Row 1 */}
        <div className="flex">
          {/* Column 1 */}
          <div className=" text-white">
            <h1 className="text-5xl font-semibold">
              Get <span className="text-blue-500">Best Products</span> With Lowest Price.
            </h1>
            <p className="mt-6 text-lg font-light">
            Empower your shopping experience with seamless browsing, exclusive deals, and fast, secure checkout <br />
            <span className="text-blue-500">welcome to the future of online shopping!</span>
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap mt-8">
              <div className="w-full lg:w-5/12 mb-4">
                <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-900 transition-all">
                  Explore Now
                  <i className="fas fa-arrow-right-from-bracket ml-3 bg-blue-700 text-white p-3 rounded-full hover:bg-white hover:text-blue-900 transition-all"></i>
                </button>
              </div>
              <div className="w-full lg:w-2/12 mb-4 flex items-center justify-center lg:justify-start">
                <i className="fas fa-play bg-white text-blue-900 p-5 rounded-full hover:bg-blue-700 hover:text-white transition-all"></i>
              </div>
              <div className="w-full lg:w-5/12 mb-4 text-center lg:text-left">
                <a href="#" className="text-blue-700 text-sm hover:text-white transition-all">
                  Watch Promotions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
