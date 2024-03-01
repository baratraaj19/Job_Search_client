import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      <div className=' pb-24'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText /> Email for the Jobs
        </h3>
        <p className='text-primary/75 mb-4 text-base'>
          Get the latest jobs in your inbox weekly
        </p>
        <div className='w-full space-y-4'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='name@gmail.com'
            className='w-full block py-2 pl-3 border focus:outline-none'
          />
          <input
            type='submit'
            value='Subscribe'
            className='w-full bg-blue rounded-md text-white py-2 cursor-pointer'
          />
        </div>
      </div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaRocket /> Get noticed faster
        </h3>
        <p className='text-primary/75 mb-4 text-base'>
          Get the latest jobs in your inbox weekly
        </p>
        <div className='w-full space-y-4'>
          <input
            type='submit'
            value='Upload Resume'
            className='w-full bg-blue rounded-md text-white py-2 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
