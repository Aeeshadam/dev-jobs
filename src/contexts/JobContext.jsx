import { useContext, useEffect, createContext, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { useAuth } from "./AuthContext";

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
  const { currentUser } = useAuth();
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
        postedBy: currentUser.uid,
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
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteJob(firestoreId, postedBy) {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, "jobs", firestoreId));
      setData(data.filter((job) => job.firestoreId !== firestoreId));
      return true;
    } catch (error) {
      setError(error.message);
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  const myJobs = data.filter((job) => job.postedBy === currentUser?.uid);

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

  const filteredJobsByContract =
    filterByContract?.length > 0
      ? filteredJobsByLocation.filter((job) =>
          filterByContract.includes(job.contract.toLowerCase())
        )
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
        setError,
        myJobs,
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
