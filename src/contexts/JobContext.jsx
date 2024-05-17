import { useContext, useEffect, createContext, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase.config";

const JobContext = createContext();

function JobProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByLocation, setFilterByLocation] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filterByContract, setFilterByContract] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  async function fetchJobs() {
    try {
      setIsLoading(true);
      const jobsCollection = await getDocs(collection(db, "jobs"));
      const jobsData = jobsCollection.docs.map((doc) => ({
        ...doc.data(),
        firestoreId: doc.id,
      }));
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
      const docRef = await addDoc(
        collection(db, "jobs"),
        newJobDataWithTimestamp
      );
      setData([
        ...data,
        { ...newJobDataWithTimestamp, firestoreId: docRef.id },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteJob(firestoreId) {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, "jobs", firestoreId));
      setData(data.filter((job) => job.firestoreId !== firestoreId));
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

  const filteredJobsByLocation = filterByLocation
    ? searchedJobs.filter((job) => {
        return job.location
          .toLowerCase()
          .includes(filterByLocation.toLowerCase());
      })
    : searchedJobs;

  const filteredJobsByContract = filterByContract
    ? filteredJobsByLocation.filter((job) => {
        return job.contract === filterByContract;
      })
    : filteredJobsByLocation;

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
        filteredJobsByLocation,
        deleteJob,
        filterByContract,
        setFilterByContract,
        filteredJobsByContract,
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
