import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { useState } from "react";
import Card from "../components/Card";
import Jobs from "../Pages/Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("https://job-search-server-ten.vercel.app/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handelInputChange = (e) => {
    setQuery(e.target.value);
    // console.log(query);
    // console.log(filteredItems);
  };

  // radio filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //button based filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for next page

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for previous page

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main filter
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }
    if (location) {
      filteredJobs = filteredJobLocation;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel === selected ||
          postingDate >= selected ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // slice the data
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, index) => <Card key={index} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className='max-w-screen-2xl container mx-auto  py-14'>
      <Banner query={query} handelInputChange={handelInputChange} />

      {/* main content */}
      <div className='bg-gray-100 md:grid grid-cols-4 gap-8 lg:px-12 px-4 py-24'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {isLoading ? (
            <h1>
              <p className='font-medium  text-gray-400'>Loading...</p>
            </h1>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className='text-xl font-bold mb-2'>
                {result.length} Jobs Found
              </h3>
              <p className='text-gray-400'>
                No jobs found for your search criteria!
              </p>
            </>
          )}

          {/* pagination */}
          {result.length > 0 ? (
            <div className='flex justify-center mt-4 space-x-8'>
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className='hover:underline'>
                Previous
              </button>
              <span className=' mx-2'>
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className='hover:underline'>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className='bg-white p-4 rounded'>
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
