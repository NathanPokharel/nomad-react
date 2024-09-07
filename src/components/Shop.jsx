import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from "../utils/products.js"
import Navbar from './Navbar.jsx';


const ProductCard = ({ image, title, price, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <motion.div
            onClick={handleClick}
            className="bg-white rounded-lg overflow-hidden w-full max-w-sm mx-auto cursor-pointer"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div className="relative" layoutId={`card-${id}`}>
                <img src={image} alt={title} className="w-full h-full" />
            </motion.div>
            <div className="p-4">
                <h2 className="text-lg mb-1 text-gray-800 truncate">{title}</h2>
                <p className="text-xl text-gray-900">{price}</p>
            </div>
        </motion.div>
    );
};

export default function Shop() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center min-h-screen p-6 scrollbar-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

