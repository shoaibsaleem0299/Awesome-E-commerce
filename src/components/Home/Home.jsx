import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import ProductCard from './components/ProductCard';
import { Data } from '../../../public/assets/data/SampleData';
import {  useProductContext } from '../../contexts/ProductContext';


const Home = () => {

    const { products } = useProductContext();
    const productResponse = products;
  let Categories = Data.Categories.slice(0,4);

  return (
    <>
    <div className='bg-gray-100 py-4'>
      <HeroSection />
      <h1 className='text-center text-2xl lg:text-4xl font-extrabold mb-8 py-2 w-[95%] lg:w-[25%] mx-auto rounded-3xl bg-gray-50 shadow-md'>Categories </h1>
      <div className='flex flex-wrap justify-evenly items-center p-4 mb-8'>
        {
          Categories.map((category, index) => (
            <CategorySection key={index} categories={category} />
          ))
        }
      </div>
      <h1 className='text-center text-2xl lg:text-4xl font-extrabold mb-8 py-2 w-[95%] lg:w-[25%] mx-auto rounded-3xl bg-gray-50 shadow-md'>Gallery</h1>
      <div className='w-[90%] flex flex-wrap justify-center lg:justify-evenly items-center m-auto'>
        <img className='w-full lg:w-[40%] h-[50vh] lg:h-[85vh]  mb-4 lg:mb-0  rounded-3xl hover:opacity-90 hover:rounded-none hover:duration-500  ' src="/assets/images/bg-3.jpeg" alt="bg-3" />
        <img className='w-full lg:w-[40%] h-[50vh] lg:h-[85vh] rounded-3xl hover:opacity-90 hover:rounded-none hover:duration-500  ' src="/assets/images/bg-2.png" alt="bg-3" />
      </div>
      <h1 className='text-center text-2xl lg:text-4xl font-extrabold mt-16 mb-10  py-2 w-[95%] lg:w-[25%] mx-auto rounded-3xl bg-gray-50 shadow-md'>Products For You</h1>
      <div className='w-[95%] mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {productResponse.map((product, index) => (
          <ProductCard key={index} productDetail={product} />
        ))}
      </div>
      <div className='text-center'><button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View More</button></div>
    </div>
    </>
  );
};

export default Home;
