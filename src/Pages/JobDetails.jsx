import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`https://job-search-server-ten.vercel.app/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handelApply = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='text-center text-2xl font-bold mt-10'>Job Details</div>
      <div className='max-w-screen-2xl container mx-auto mt-16 md:px-0 xl:px-24 px-4'>
        <div className='bg-gray-200 p-4 rounded-md flex flex-col gap-3'>
          <img src={job.companyLogo} alt='' />
          <h2>
            <b>jobTitle :</b> {job.jobTitle}
          </h2>
          <h2>
            <b>Company Name:</b> {job.companyName}
          </h2>
          <h2>
            <b>minPrice:</b> ${job.minPrice}k - <b></b>maxPrice : $
            {job.maxPrice}k{" "}
          </h2>
          <h2>
            <b>salaryType:</b> {job.salaryType}
          </h2>

          <h2>
            <b>postingDate:</b> {job.postingDate}
          </h2>
          <h2>
            <b>Experience:</b> {job.experienceLevel}
          </h2>
          <h2>
            <b>employmentType:</b> {job.employmentType}
          </h2>
          <h2>
            <b>postedBy:</b> {job.postedBy}
          </h2>

          <h2>
            <b>Location:</b> {job.jobLocation}
          </h2>
          <h2>
            <b>Job Description:</b> {job.description}
          </h2>
          <h2>
            <b>createdAt:</b> {job.createdAt}
          </h2>

          <button
            className='bg-blue px-8 py-2 rounded-md text-white'
            onClick={handelApply}>
            Apply Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
