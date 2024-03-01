import React from "react";
import InputField from "../components/InputField";

const JobPostingDate = ({ handleChange }) => {
  const now = new Date();
  const twentyfourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtydaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyfourHoursAgoData = twentyfourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoData = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtydaysAgoData = thirtydaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className='text-lg mb-2 font-semibold'>Date of posting</h4>
      <div>
        <label className='sidebar-label-container '>
          <input type='radio' name='test' value='' onChange={handleChange} />
          <span className='checkmark'></span>All time
        </label>
        <InputField
          handleChange={handleChange}
          name='test'
          title='Last 24 hours'
          value={twentyfourHoursAgoData}
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='Last 7 days'
          value={sevenDaysAgoData}
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='Last 30 days'
          value={thirtydaysAgoData}
        />
      </div>
    </div>
  );
};

export default JobPostingDate;
