import React from "react";

const Jobs = ({ result }) => {
  return (
    <div>
      <div>
        <h3 className='text-xl font-bold mb-2'>{result.length} Jobs Found</h3>
      </div>
      <section className='card-container'> {result}</section>
    </div>
  );
};

export default Jobs;
