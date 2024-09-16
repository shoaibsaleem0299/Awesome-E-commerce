import React from 'react'
import { Link } from 'react-router-dom';

export function CategorySection({imageUrl, title}) {
    return (
        <div className="flex flex-col items-center ">
            <img className="bg-gray-200 rounded-full h-44 px-8 py-6 shadow-md" src={imageUrl} />
            <Link to="/">
                <button className="relative bottom-8  bg-white py-4 px-10 text-sm font-extrabold rounded-full shadow-lg hover:text-white hover:bg-blue-500 hover:duration-300">{title}</button>
            </Link>
        </div>
    )
}
