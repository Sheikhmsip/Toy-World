import React from 'react';
import useTitle from '../../hook/useTitle';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    useTitle("Out Of world")
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center text-purple-900 pt-4'>
        <div className='container flex flex-col items-center justify-center mx-auto'>
          <div className='rounded-lg mx-auto'>
            <img className='rounded-full w-[70%] mx-auto' src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="" />
          </div>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-black'>
              <span className='sr-only'>Error </span> 
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8 text-black'>
              You Are At Wrong Place!!!
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-black text-white'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;