import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
const Card = ({ data }) => {
  const {
    companyName,
    _id,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;

  return (
    <div>
      <section className='card m-5 border-2 p-5 cursor-pointer border-gray-200 rounded-lg'>
        <Link
          to={`/job/${_id}`}
          className='flex gap-4 flex-col  sm:flex-row items-start'>
          <img
            className='w-24 h-24 rounded-full object-contain '
            src={companyLogo}
            alt=''
          />
          <div>
            <h4 className='text-primary mb-1  '>{companyName}</h4>
            <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

            <div className='flex justify-between flex-wrap gap-2 mb-2 text-base  text-gray-500'>
              <span className='flex items-center gap-2'>
                <FiMapPin />
                {jobLocation}
              </span>
              <span className='flex items-center gap-2 '>
                <FiClock />
                {employmentType}
              </span>
              <span className='flex items-center gap-2 '>
                <FaIndianRupeeSign />
                {minPrice} - {maxPrice} LPA {salaryType}
              </span>
              <span className='flex items-center gap-2 '>
                <FiCalendar />
                {postingDate}
              </span>
            </div>
            <p className='text-gray-500 text-base'>{description}</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
