import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
  <div className='flex flex-col justify-center items-center w-4/12 mx-auto space-y-2 mt-30'>
    <h1 className='text-8xl font-extrabold text-black'>404</h1>
    <h3 className='text-xl font-semibold'>Page Not Found</h3>
    <p>Soory, we couldn't find the file you're looking for.</p>
    <Link to={"/"} className='text-xl py-1.5 px-4 bg-blue-600 text-white rounded-sm font-medium'>Go Home</Link>
  </div>
  );
};

export default ErrorPage;