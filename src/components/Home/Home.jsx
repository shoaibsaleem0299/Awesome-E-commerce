import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';

const Home = () => {
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
    </>
  );
};

export default Home;
