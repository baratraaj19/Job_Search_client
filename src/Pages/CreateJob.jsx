import React from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setBase64Image(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  // console.log(base64Image);

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

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    if (base64Image) {
      data.companyLogo = base64Image;
    }
    // console.log(data.companyLogo);w

    // data.companyLogo = base64Image;
    // console.log(data.companyLogo);
    fetch("https://job-search-server-ten.vercel.app/post-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((result) => {
        // console.log(result.acknowledged);
        if (result.postedBy != null || result.acknowledged) {
          toast.success("Job Posted Successfully");
        } else {
          toast.error("Something Went Wrong");
        }
        reset();
      });
    });
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* 1st row */}
          <div className=' create-job-flex'>
            <div className='lg-w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input
                type='text'
                maxlength='100'
                required={true}
                defaultValue={"web Developer"}
                {...register("jobTitle")}
                className='create-job-input'
              />
            </div>
            <div className='lg-w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input
                type='text'
                maxlength='100'
                required={true}
                placeholder='Microsoft'
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
                maxlength='5'
                type='text'
                required={true}
                placeholder='$80k'
                {...register("minPrice")}
                className='create-job-input'
              />
            </div>
            <div className='lg-w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input
                type='text'
                maxlength='5'
                required={true}
                placeholder='$120k'
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
                required={true}
                className='create-job-input'>
                <option value=''>Choose Your Salary Type</option>
                <option value='Hourly'>Hourly</option>
                <option value='Monthly'>Monthly</option>
                <option value='Yearly'>Yearly</option>
              </select>
            </div>
            <div className='lg-w-1/2 w-full'>
              <label className='block mb-2 text-lg'>job Location</label>
              <input
                type='text'
                maxlength='50'
                required={true}
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
                required={true}
                placeholder='mm/dd/yyyy'
                {...register("postingDate")}
                className='create-job-input'
              />
            </div>
            <div className='lg-w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select
                {...register("experienceLevel")}
                required={true}
                className='create-job-input'>
                <option value=''>Choose Your Experience Level</option>
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
                value={selectedOption}
                options={options}
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
                type='file'
                required={true}
                accept='image/*'
                placeholder='upload your company logo here'
                className='create-job-input'
                onChange={handleFileChange}
              />
              <div>{base64Image && <img src={base64Image} alt='' />}</div>
            </div>
            <div className='lg-w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Experience Type</label>
              <select
                required={true}
                {...register("employmentType")}
                className='create-job-input'>
                <option value=''>Choose Your Experience Type</option>
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
              name='jobDescription'
              {...register("description")}
              className='create-job-input'
              placeholder='Write your job description here'
              id=''
              required={true}
              cols='30'
              rows='10'></textarea>
          </div>

          {/* 8 row */}
          <div className=' w-full'>
            <label className='block mb-2 text-lg'>Job Posted by</label>
            <input
              type='email'
              name='jobPostedBy'
              maxlength='100'
              {...register("postedBy")}
              className='create-job-input'
              required={true}
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
  );
};

export default CreateJob;
