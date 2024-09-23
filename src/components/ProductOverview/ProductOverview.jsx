import React, { useEffect, useState } from 'react';
import { useProductContext } from '../../contexts/ProductContext';
import { useParams } from 'react-router-dom';

const ProductOverview = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (type) => {
        if (type === 'increase') {
            setQuantity(quantity + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const { products } = useProductContext();
    const productId = useParams();    
    const [product, setproduct] = useState([]);
        
    useEffect(() => {
         const product = products.find((item) => item.id === parseInt(productId.id));
         setproduct(product);
    }, [productId])


    return (
        
        <div className="pd-wrap p-40 bg-gray-100">
            <div className="container mx-auto">
                <div className="heading-section text-center mb-8">
                    <h2 className="text-3xl p-4 font-extrabold">Product Details</h2>
                </div>
                <div className="flex flex-wrap">
                    {/* Left Side - Product Images */}
                    <div className="w-full md:w-1/2">
                        <div className="product-slider">
                            <div className="mb-4">
                                <img
                                    className="w-full"
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    alt="Product"
                                />
                            </div>
                            {/* Thumbnail Images */}
                            <div className="flex space-x-2 overflow-x-auto">
                                <img
                                    className="w-24 h-24 object-cover"
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    alt="Thumbnail"
                                />
                                <img
                                    className="w-24 h-24 object-cover"
                                    src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg"
                                    alt="Thumbnail"
                                />
                                {/* Add more thumbnail images as needed */}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="w-full md:w-1/2 pl-4">
                        <div className="product-dtl">
                            <div className="product-info">
                                <h3 className="text-xl font-semibold">Variable Product</h3>
                                <div className="reviews-counter flex items-center space-x-2 mt-2">
                                    <div className="rate">
                                        <input type="radio" id="star5" name="rate" value="5" className="hidden" />
                                        <label htmlFor="star5" className="text-yellow-400">★</label>
                                        {/* Repeat for other stars */}
                                    </div>
                                    <span>3 Reviews</span>
                                </div>
                                <div className="product-price-discount mt-4">
                                    <span className="text-2xl font-semibold">$39.00</span>
                                    <span className="line-through text-gray-500 ml-2">$29.00</span>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            {/* Size and Color Selection */}
                            <div className="flex mt-6 space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Size</label>
                                    <select className="w-full border rounded py-2 px-4">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700">Color</label>
                                    <select className="w-full border rounded py-2 px-4">
                                        <option>Blue</option>
                                        <option>Green</option>
                                        <option>Red</option>
                                    </select>
                                </div>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="product-count mt-6">
                                <label className="block text-gray-700">Quantity</label>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => handleQuantityChange('decrease')} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        className="w-12 text-center border rounded py-2"
                                    />
                                    <button onClick={() => handleQuantityChange('increase')} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                </div>
                                <button className="mt-4 bg-black text-white px-6 py-2 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="product-info-tabs mt-10">
                    <div className="flex space-x-4 border-b">
                        <button className="pb-2 border-b-2 border-black">Description</button>
                        <button className="pb-2">Reviews (0)</button>
                    </div>
                    <div className="tab-content mt-6">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
