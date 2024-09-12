import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='flex justify-evenly items-center p-4'>
        <CategorySection 
        imageUrl="https://content.jdmagicbox.com/quickquotes/images_main/bisleri-fonzo-600-ml-359983121-mn99t.png?impolicy=queryparam&im=Resize=(360,360),aspect=fit" 
        title="Cold Drinks" />
      </div>
    </>
  );
};

export default Home;
