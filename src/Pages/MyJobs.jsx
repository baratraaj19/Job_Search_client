import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { Toaster, toast } from "sonner";

const MyJobs = () => {
  const email = "baratraajcr19@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/myJobs/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        // setIsLoading(false);
      });
  }, [isLoading]);

  const handelSearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filter);
    setJobs(filter);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.acknowledged === true) {
          toast.error("job deleted successfully");
        }
      });
  };

  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='my-jobs-container'>
        <h1 className='text-md p-4 text-center'>All My Jobs : {jobs.length}</h1>
        <div className='search-box p-2 text-center mb-2'>
          <input
            type='text'
            placeholder='Search'
            className='py-2 pl-3 rounded-md border focus:outline-none lg:w-6/12 mb-4 w-full'
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className='bg-blue text-white px-8 py-2 mb-4 rounded-md '
            onClick={handelSearch}>
            Search
          </button>
        </div>
      </div>
      {/* table */}

      <section className='py-1 bg-blueGray-50'>
        <div className='w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-5'>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded '>
            <div className='rounded-t mb-0 px-4 py-3 border-0'>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                  <h3 className='font-semibold text-base text-blueGray-700'>
                    All Jobs
                  </h3>
                </div>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1 text-right'>
                  <Link to='/post-job'>
                    <button
                      className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'>
                      <span className='flex p-2 gap-3 items-center'>
                        <FaPlus /> Post New Job
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='block w-full overflow-x-auto'>
              <table className='items-center bg-transparent w-full border-collapse '>
                <thead>
                  <tr>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
                      Sl.No
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
                      Title
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
                      Company Name
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
                      Salary
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
                      EDIT
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
                      DELETE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={index} className='text-center'>
                      <th className='border-t-0 px-6  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  text-blueGray-700 '>
                        {index + 1}
                      </th>
                      <td className='border-t-0 px-6  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 '>
                        {job.jobTitle}
                      </td>
                      <td className='border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        {job.companyName}
                      </td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        ${job.minPrice}k - ${job.maxPrice}k
                      </td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        <button>
                          <Link to={`/edit-job/${job._id}`}>
                            <span className='flex p-2 gap-3 items-center'>
                              <FiEdit /> Edit
                            </span>
                          </Link>
                        </button>
                      </td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        <button
                          onClick={() => {
                            handleDelete(job._id);
                          }}
                          className='bg-red-500 rounded-md text-white px-4 py-2'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <Toaster richColors />
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
