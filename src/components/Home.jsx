import Navbar from './Navbar';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { annotate } from 'rough-notation';

export default function Home() {
    useEffect(() => {
        const e = document.querySelector('.highlight');
        const f = document.querySelector('.cross');

        if (e && f) {
            const highlight = annotate(e, { type: 'highlight', color: '#baf79c' });
            const cross = annotate(f, { type: 'crossed-off', color: 'red' });
            highlight.show();
            cross.show();
        } else {
            console.error('One or both elements not found');
        }
    }, []); // Empty dependency array means this runs once after the initial render

    return (
        <>
            <Navbar />
            <section className='relative h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center glassmorphism'>
                <div className="mb-16 text-center px-4">
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight'>
                        For the <span className='highlight'>Journey</span>, Not the <span className='cross'>Landfill</span>.
                    </h1>
                </div>
                <div className='text-xl relative z-40 mb-16 rounded-lg bg-black px-6 py-3 text-white linkHover mb-[20%]'>
                    <Link to="/shop">Shop.</Link>
                </div>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-3/4 sm:w-1/2 md:w-1/3'>
                    <img src="/background.png" alt="Background" className="w-full h-auto" />
                </div>
            </section>
        </>
    );
}

