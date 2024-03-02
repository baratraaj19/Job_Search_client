import React, { useEffect, useState } from "react";

const MyJobs = () => {
  const email = "baratraajcr19@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/all-jobs/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        // setIsLoading(false);
      });
  }, []);

  return <div>MyJobs :{jobs.length}</div>;
};

export default MyJobs;
