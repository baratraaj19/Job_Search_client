import React from "react";

import { FiSearch } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

const Banner = ({ query, handelInputChange }) => {
  return (
    <div>
      <div className=' max-w-screen-2xl container mx-auto  lg:px-24 px-7 py-14'>
        <h1 className='text-5xl font-bold text-primary mb-3'>
          Find your <span className='text-blue'>DREAM JOB</span> today
        </h1>
        <p className='text-lg text-black/70 mb-8'>
          Lorem ipsum dolor sit amet conseti ducimus dignissimos, aliquid ut ex
          dolor? Omnis.
        </p>
        <form>
          <div className='md:flex xl:flex max-w-screen-2xl    '>
            <div className='flex md:rounded-s-md rounded shadow-sm border-2 border-gray-200  ring-1ring-inset  focus-within:ring-2 focus-within:ring-inset focus-within:rounded  focus-within:ring-indigo-600 md:w-1/2 w-full'>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='What are you looking for?'
                onChange={handelInputChange}
                value={query}
                className='block flex-1 border-e bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              />
              <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <div className='flex md:rounded-s-md rounded shadow-sm border-2 border-gray-200  ring-1ring-inset  focus-within:ring-2 focus-within:ring-inset focus-within:rounded  focus-within:ring-indigo-600 md:w-1/2 w-full'>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='where are you looking for?'
                onChange={handelInputChange}
                value={query}
                className='block flex-1 border-e bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              />
              <TfiLocationPin className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <button
              type='submit'
              className='py-2 px-8 rounded-md border   bg-blue text-white'>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
