import React from "react";

import Location from "./Location";
import Salary from "./Salary";
import JobPostingDate from "./JobPostingDate";
import WorkExperience from "./WorkExperience";
import EmploymentType from "./EmploymentType";
// Sidebar component

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div>
      <div className='space-y-5'>
        <h3 className='text-xl font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange} />
        <Salary handleChange={handleChange} handleClick={handleClick} />
        <JobPostingDate handleChange={handleChange} />
        <WorkExperience handleChange={handleChange} />
        <EmploymentType handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Sidebar;
