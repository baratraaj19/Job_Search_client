import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  const [query, setQuery] = useState("");
  const handelInputChange = (e) => {
    setQuery(e.target.value);
    // console.log(query);
  };

  const filteredJobs = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  console.log(filteredJobs);
  return (
    <div>
      <Banner query={query} handelInputChange={handelInputChange} />
    </div>
  );
};

export default Home;
