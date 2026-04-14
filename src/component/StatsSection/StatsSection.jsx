import React from 'react';

const StatsSection = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto px-3 pb-10'>
            <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center rounded-sm py-10 '>
                <h3 className='text-3xl font-bold '>10</h3>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center rounded-sm py-10 '>
                <h3 className='text-3xl font-bold '>3</h3>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center rounded-sm py-10 '>
                <h3 className='text-3xl font-bold '>6</h3>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='shadow-[0_0_15px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center rounded-sm py-10 '>
                <h3 className='text-3xl font-bold '>12</h3>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
        
    );
};

export default StatsSection;