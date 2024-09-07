import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='flex flex-row items-center justify-between p-4 border-b-2 '>
            <span className='text-2xl cursor-pointer'><Link to="/">Nomad.</Link></span>
            <div>
                <li className='text-lg inline-block linkHover cursor-pointer'><Link to="/shop">Shop.</Link></li>
                <li className='text-lg mx-6 inline-block linkHover cursor-pointer'>About.</li>
            </div>
        </nav>
    )
}

