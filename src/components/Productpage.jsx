import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../utils/products.js';

export default function Productpage() {
    const { id } = useParams();
    const product = products.find(product => product.id === id);

    if (!product) {
        return <div className="text-center p-4">Product not found</div>;
    }

    const { title, image, price, description } = product;

    return (
        <div className="flex flex-col md:flex-row h-screen w-screen">
            {/* Image Section */}
            <motion.div
                className="w-full md:w-[45%] flex items-center justify-center overflow-hidden"
                layoutId={`card-${id}`}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center min-w-[300px] min-h-[300px]"
                />
            </motion.div>

            {/* Details Section */}
            <div className="w-full md:w-[55%] p-6 flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg">
                <div className="w-full h-[50%] flex flex-col justify-between">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-8xl">{title}</h1>
                        <p className="text-xl font text-gray-700">{price}</p>
                    </div>
                    <p className="text-base text-gray-600 mt-2 mb-6">{description}</p>
                    <div className="text-lg bg-black px-6 py-3 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors text-center mt-4 cursor-pointer">
                        Buy now
                    </div>
                </div>
            </div>
        </div>
    );
}

