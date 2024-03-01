import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <div>
        <h4 className='text-lg mb-2 font-semibold'>Work Experience</h4>
        <div>
          <label className='sidebar-label-container '>
            <input type='radio' name='test' value='' onChange={handleChange} />
            <span className='checkmark'></span>Any experience
          </label>
          <InputField
            handleChange={handleChange}
            name='test'
            title='Work remotely'
            value='Work remotely'
          />
          <InputField
            handleChange={handleChange}
            name='test'
            title='Intership'
            value='Intership'
          />
          <InputField
            handleChange={handleChange}
            name='test'
            title='Entry-level'
            value='Entry-level'
          />
          <InputField
            handleChange={handleChange}
            name='test'
            title='Mid-level'
            value='Mid-level'
          />
          <InputField
            handleChange={handleChange}
            name='test'
            title='Senior'
            value='Senior'
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
