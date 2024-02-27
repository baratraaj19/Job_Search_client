import React from "react";
import InputField from "../components/InputField";

const Loaction = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg mb-2 font-semibold'>Location</h4>
      <div>
        <label className='sidebar-label-container '>
          <input type='radio' name='test' value='' onChange={handleChange} />
          <span className='checkmark'></span>All
        </label>
        <InputField
          handleChange={handleChange}
          name='test'
          title='london'
          value='London'
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='Brussels'
          value='brussels'
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='San Francisco'
          value='san Francisco'
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='Boston'
          value='boston'
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='Seattle'
          value='seattle'
        />
        <InputField
          handleChange={handleChange}
          name='test'
          title='Chennai'
          value='chennai'
        />
      </div>
    </div>
  );
};

export default Loaction;
