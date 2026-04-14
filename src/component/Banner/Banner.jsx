import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center p-3 space-y-4 py-20'>
            
            <h2 className='text-3xl text-center md:text-5xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-center text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
             relationships that matter most.</p>
             
            <button className='bg-green-800 px-2 py-1 rounded-sm font-bold text-white' >+ Add a Friend</button>
                        
        </div>
    );
};

export default Banner;