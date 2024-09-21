import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppFucntions from '../../../../public/assets/ui_functions/ui_fuctions';

function ProductCard({productDetail}) {
    const {id, thumbnail, title, price, rating, cutPrice = 0, favorite = false} = productDetail;
    const [favorites, isFavorite] = useState(favorite);
    const onClick = () => {
        isFavorite(!favorites)
    }
   
    return (
        <div className="relative my-10 w-[95%] lg:w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <Link to="#">
                <img 
                className="h-60 rounded-t-lg object-cover mx-auto" 
                src={thumbnail} 
                alt="product image" 
                onError={AppFucntions.handleErrorImage}
                />
            </Link>
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
            <div className="mt-4 px-5 pb-5">
                <Link to="#">
                    <h5 className="text-xl font-bold tracking-tight text-slate-900">{title}</h5>
                </Link>
                <div className="mt-2.5 mb-5 flex items-center">
                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
                    <span className='mx-2'><button onClick={onClick}>{favorites ? <i className="fa-solid fa-heart text-red-500 text-xl"></i> : <i className="fa-regular fa-heart text-xl"></i>}</button></span>
                </div>
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-xl font-bold text-slate-900">Rs.{price}</span>
                        <br />
                        <span className="text-sm text-slate-900 line-through">Rs.{cutPrice}</span>
                    </p>
                    <Link to="#" className="flex items-center rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-200 hover:text-black hover:duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;