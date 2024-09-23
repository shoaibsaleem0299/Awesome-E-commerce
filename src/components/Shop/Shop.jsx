import React, { useState } from 'react'
import { HeroTitle } from './components/Title'
import { Data } from '../../../public/assets/data/SampleData';
import ProductCard from '../Home/components/ProductCard';
import { useProductContext } from '../../contexts/ProductContext';


export const Shop = () => {
  const {products} = useProductContext();

  const [currectPage, setCurrentPage] = useState(1);
  const postPerPage = 9;
  const totalPages = Math.ceil(products.length / postPerPage);
  const indexOfLastProduct = postPerPage * currectPage;
  const indexOfFirstProduct = indexOfLastProduct - postPerPage;
  const productsPerPage = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePrevPage = () => {
    if (currectPage > 1) {
      setCurrentPage(currectPage - 1);
    }
  }
  const handleNextPage = () => {
    if (currectPage < totalPages) {
      setCurrentPage(currectPage + 1);
    }
  }


  return (
    <div className='bg-gray-100 '>
      <HeroTitle title="Shop" />
      <h1 className='text-center text-2xl lg:text-4xl font-extrabold py-2 w-[90%] lg:w-[25%] mx-[4.5%] rounded-lg bg-gray-50 shadow-md'>Most Popular</h1>
      <div className='w-[95%] mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {productsPerPage.map((product, index) => (
          <ProductCard key={index} productDetail={product} />
        ))}
      </div>
      <div className="flex flex-col items-center py-6">
        <span className="text-md text-gray-700 ">
          Showing <span className="font-semibold text-gray-900 ">{currectPage}</span> to <span className="font-semibold text-gray-900 ">{totalPages}</span>
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <button
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-700 border border-gray-700 rounded-lg hover:bg-white hover:text-black hover:duration-300 mx-2"
            onClick={handlePrevPage}
            disabled={currectPage === 1}
          >
            Prev
          </button>
          <button
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-700 border border-gray-700 rounded-lg hover:bg-white hover:text-black hover:duration-300 mx-2"
            onClick={handleNextPage}
            disabled={currectPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
