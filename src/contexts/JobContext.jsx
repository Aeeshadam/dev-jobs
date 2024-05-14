import { useContext, useEffect, createContext, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

const JobContext = createContext();

function JobProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByLocation, setFilterByLocation] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // eslint-disable-next-line no-undef
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  async function fetchJobs() {
    try {
      setIsLoading(true);
      const jobsCollection = await getDocs(collection(db, "jobs"));
      const jobsData = jobsCollection.docs.map((doc) => doc.data());
      setData(jobsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  async function addJob(newJobData) {
    try {
      setIsLoading(true);
      const currentTimeStamp = new Date().getTime();
      const newJobDataWithTimestamp = {
        ...newJobData,
        timestamp: currentTimeStamp,
      };
      await addDoc(collection(db, "jobs"), newJobDataWithTimestamp);
      setData([...data, newJobDataWithTimestamp]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const searchedJobs = searchQuery
    ? data.filter((job) =>
        job.position.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data;

  const filteredJobs = filterByLocation
    ? searchedJobs.filter((job) => {
        return job.location
          .toLowerCase()
          .includes(filterByLocation.toLowerCase());
      })
    : searchedJobs;

  return (
    <JobContext.Provider
      value={{
        data,
        isLoading,
        error,
        addJob,
        searchQuery,
        setSearchQuery,
        filterByLocation,
        setFilterByLocation,
        modalIsOpen,
        setModalIsOpen,
        isSmallScreen,
        setIsSmallScreen,
        fetchJobs,
        searchedJobs,
        filteredJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

function useJob() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
}

export { JobProvider, useJob };
