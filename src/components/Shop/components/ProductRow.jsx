import { useRef } from 'react';

const ProductRow = ({ products }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      {/* Previous Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 p-2 m-2 bg-gray-500 text-white rounded-full"
      >
        &#8592;
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4"
      >
        {products.map((product, index) => (
          <ProductCard key={index} productDetail={product} />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 p-2 m-2 bg-gray-500 text-white rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ProductRow;
