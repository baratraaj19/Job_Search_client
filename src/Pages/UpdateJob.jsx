import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          toast.success("Job Updated Successfully");
        } else {
          toast.error("Something Went Wrong");
        }
        reset();
      });
    });
  };
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Html", label: "Html" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "Express", label: "Express" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "MySQL", label: "MySQL" },
    { value: "git", label: "git" },
    { value: "react", label: "react" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C++", label: "C++" },
  ]; // watch input value by passing the name of it

  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/* 1st row */}
            <div className=' create-job-flex'>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Title</label>
                <input
                  type='text'
                  defaultValue={jobTitle}
                  {...register("jobTitle")}
                  className='create-job-input'
                />
              </div>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Name</label>
                <input
                  type='text'
                  placeholder='Microsoft'
                  defaultValue={companyName}
                  {...register("companyName")}
                  className='create-job-input'
                />
              </div>
            </div>
            {/* 2nd row */}
            <div className=' create-job-flex'>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input
                  type='text'
                  placeholder='$80k'
                  defaultValue={minPrice}
                  {...register("minPrice")}
                  className='create-job-input'
                />
              </div>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Salary</label>
                <input
                  type='text'
                  placeholder='$120k'
                  defaultValue={maxPrice}
                  {...register("maxPrice")}
                  className='create-job-input'
                />
              </div>
            </div>
            {/* 3 row */}
            <div className=' create-job-flex'>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>salaryType</label>
                <select
                  {...register("salaryType")}
                  className='create-job-input'>
                  <option value={salaryType}>{salaryType}</option>
                  <option value='Hourly'>Hourly</option>
                  <option value='Monthly'>Monthly</option>
                  <option value='Yearly'>Yearly</option>
                </select>
              </div>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>job Location</label>
                <input
                  defaultValue={jobLocation}
                  type='text'
                  placeholder='Chennai'
                  {...register("jobLocation")}
                  className='create-job-input'
                />
              </div>
            </div>
            {/* 4 row */}
            <div className=' create-job-flex'>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input
                  type='date'
                  defaultValue={postingDate}
                  placeholder='mm/dd/yyyy'
                  {...register("postingDate")}
                  className='create-job-input'
                />
              </div>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Experience Level</label>
                <select
                  {...register("experienceLevel")}
                  className='create-job-input'>
                  <option value={experienceLevel}>{experienceLevel}</option>
                  <option value='Any experience'>Any experience</option>
                  <option value='Internship'>Internship</option>
                  <option value='Mid-level'>Mid-level</option>
                  <option value='Entry-level'>Entry-level</option>
                  <option value='Senior'>Senior</option>
                </select>
              </div>
            </div>
            {/* 5 row */}
            <div className=' create-job-flex'>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Required Skills</label>

                <CreatableSelect
                  onChange={setSelectedOption}
                  options={options}
                  defaultValue={skills}
                  isMulti
                  className='create-job-input py-4'
                  classNamePrefix='select'
                />
              </div>
            </div>
            {/* 6 row */}
            <div className=' create-job-flex'>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                <input
                  type='url'
                  defaultValue={companyLogo}
                  placeholder='paste your company logo url here : https://www.npmjs.com/img1.png'
                  {...register("companyLogo")}
                  className='create-job-input'
                />
              </div>
              <div className='lg-w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Employment Type</label>
                <select
                  defaultValue={employmentType}
                  {...register("employmentType")}
                  className='create-job-input'>
                  <option value={employmentType}>{employmentType}</option>
                  <option value='Internship'>Full-time</option>
                  <option value='Part-time'>Part-time</option>
                  <option value='Temporary'>Temporary</option>
                </select>
              </div>
            </div>

            {/* 7 row */}
            <div className=' w-full'>
              <label className='block mb-2 text-lg'>Job Description</label>
              <textarea
                defaultValue={description}
                name='jobDescription'
                {...register("description")}
                className='create-job-input'
                placeholder='Write your job description here'
                id=''
                cols='30'
                rows='10'></textarea>
            </div>

            {/* 8 row */}
            <div className=' w-full'>
              <label className='block mb-2 text-lg'>Job Posted by</label>
              <input
                type='email'
                defaultValue={postedBy}
                name='jobPostedBy'
                {...register("postedBy")}
                className='create-job-input'
                placeholder='Your email'></input>
            </div>
            <input
              type='submit'
              className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-md cursor-pointer'
            />
            <Toaster richColors />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
