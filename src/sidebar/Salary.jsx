import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className='text-lg mb-2 font-semibold'>Salary</h4>
      <div className='flex justify-between mb-4'>
        <Button
          onClickHandler={handleClick}
          className=' active:bg-blue'
          value='Hourly'
          title='Hourly'
        />
        <Button onClickHandler={handleClick} value='Monthly' title='Monthly' />
        <Button onClickHandler={handleClick} value='Yearly' title='Annually' />
      </div>
      <div>
        <label className='sidebar-label-container '>
          <input type='radio' name='test' value='' onChange={handleChange} />
          <span className='checkmark'></span>All
        </label>
        <InputField
          handleChange={handleChange}
          name='test2'
          title='<30000k'
          value={30}
        />
        <InputField
          handleChange={handleChange}
          name='test2'
          title='<50000k'
          value={50}
        />
        <InputField
          handleChange={handleChange}
          name='test2'
          title='<80000k'
          value={80}
        />
        <InputField
          handleChange={handleChange}
          name='test2'
          title='<100000k'
          value={100}
        />
      </div>
    </div>
  );
};

export default Salary;
