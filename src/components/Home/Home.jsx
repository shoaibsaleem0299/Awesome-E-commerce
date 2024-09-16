import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import ProductCard from './components/ProductCard';


const Home = () => {

  const products = [
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike Shoes",
      price: 1500,
      rating: 4.5,
      cutPrice: 2000,
      favorite: true
    },
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike Shoes",
      price: 1500,
      rating: 4.5,
      cutPrice: 2000,
      favorite: true
    },
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike Shoes",
      price: 1500,
      rating: 4.5,
      cutPrice: 2000,
      favorite: true
    },
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike Shoes",
      price: 1500,
      rating: 4.5,
      cutPrice: 2000,
      favorite: true
    },
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike Shoes",
      price: 1500,
      rating: 4.5,
      cutPrice: 2000,
      favorite: true
    },
    {
      imageUrl: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike Shoes",
      price: 1500,
      rating: 4.5,
      cutPrice: 2000,
      favorite: true
    },
  ];
  return (
    <>
      <HeroSection />
      <div className='flex flex-wrap justify-evenly items-center p-4 mb-8'>
        <CategorySection
          imageUrl="https://content.jdmagicbox.com/quickquotes/images_main/bisleri-fonzo-600-ml-359983121-mn99t.png?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
          title="Cold Drinks" />
        <CategorySection
          imageUrl="https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png"
          title="Vegitables" />
        <CategorySection
          imageUrl="https://www.clipartspng.com/uploads/small/medicine-clipart/ryTcJZcSJnON-cool-medicine-clipart-medicine-bottle-png.png"
          title="Medicine" />
        <CategorySection
          imageUrl="https://content.jdmagicbox.com/quickquotes/images_main/bisleri-fonzo-600-ml-359983121-mn99t.png?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
          title="Cold Drinks" />
      </div>
      <div className='w-[90%] flex flex-wrap justify-center lg:justify-evenly items-center m-auto'>
        <img className='w-full lg:w-[40%] h-[50vh] lg:h-[85vh]  mb-4 lg:mb-0  rounded-3xl ' src="/assets/images/bg-3.jpeg" alt="bg-3" />
        <img className='w-full lg:w-[40%] h-[50vh] lg:h-[85vh] rounded-3xl ' src="/assets/images/bg-2.png" alt="bg-3" />
      </div>
      <div className='grid grid-cols-1 md:grid lg:grid-cols-3'>
        {products.map((product, index) => (
          <ProductCard key={index} productDetail={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
