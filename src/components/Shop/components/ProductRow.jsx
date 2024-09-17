import React from 'react';
import ProductCard from '../../Home/components/ProductCard';

const ProductCarousel = ({ products }) => {
  const scrollLeft = () => {
    const wrapper = document.querySelector('.carousel-wrapper');
    wrapper.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const wrapper = document.querySelector('.carousel-wrapper');
    wrapper.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center">
      <button
        className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
        onClick={scrollLeft}
      >
        ‹
      </button>
      <div className="carousel-wrapper overflow-x-auto scroll-smooth whitespace-nowrap flex gap-4 py-2">
        <div className="flex flex-nowrap gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} productDetail={product}/>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
        onClick={scrollRight}
      >
        ›
      </button>
    </div>
  );
};

export default ProductCarousel;
