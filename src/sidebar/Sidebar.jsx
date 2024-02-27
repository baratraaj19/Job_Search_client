import React from "react";

import Location from "./Location";

// Sidebar component

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div>
      <div className='space-y-5'>
        <h3 className='text-xl font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Sidebar;
