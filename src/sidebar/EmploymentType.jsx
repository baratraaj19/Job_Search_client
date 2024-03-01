import React from "react";
import InputField from "../components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <div>
        <h4 className='text-lg mb-2 font-semibold'>Employment Type</h4>
        <div>
          <label className='sidebar-label-container '>
            <input type='radio' name='test' value='' onChange={handleChange} />
            <span className='checkmark'></span>Any
          </label>
          <InputField
            handleChange={handleChange}
            name='test'
            title='Full-time'
            value='Full-time'
          />
          <InputField
            handleChange={handleChange}
            name='test'
            title='Part-time'
            value='Part-time'
          />
          <InputField
            handleChange={handleChange}
            name='test'
            title='Temporary'
            value='Temporary'
          />
        </div>
      </div>
    </div>
  );
};

export default EmploymentType;
