import React from 'react'
import LogoIMg from '../../assets/logo.png'
import Png1 from '../../assets/1.png'
import Png2 from '../../assets/2.png'
import Png3 from '../../assets/3.png'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-6'>
            <div>
                <img src={LogoIMg} alt="" />
            </div>
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Timeline</a></li>
                    <li><a>Stats</a></li>
                </ul>
            </div>
            <div className='md:flex gap-6 hidden'>
                <div className='bg-green-800 flex gap-1 px-2 py-1  rounded-sm justify-center items-center'>
                    <img src={Png1} alt="" className='w-5 h-4' />
                    <p className='text-white font-semibold'>Home</p>
                </div>
                <div className=' flex gap-1 px-2 py-1 hover:bg-gray-200  rounded-sm justify-center items-center'>
                    <img src={Png2} alt="" className='w-5 h-4' />
                    <p className='font-semibold'>Timeline</p>
                </div>
                <div className=' flex gap-1 px-2 py-1 hover:bg-gray-200 rounded-sm justify-center items-center'>
                    <img src={Png3} alt="" className='w-4 h-4' />
                    <p className='font-semibold'>Stats</p>
                </div>



            </div>

        </div>


    )
}

export default Navbar
