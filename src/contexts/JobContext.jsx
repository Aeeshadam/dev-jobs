import {
  useContext,
  useEffect,
  createContext,
  useState,
  useCallback,
} from "react";
import { toast } from "react-toastify";
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

  const fetchJobs = useCallback(async () => {
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
  }, [data]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = useCallback(
    async (newJobData) => {
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
        await fetchJobs();
        toast.success("Job posted successfully!");
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [currentUser, fetchJobs]
  );

  const deleteJob = useCallback(async (firestoreId, postedBy) => {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, "jobs", firestoreId));
      setData(data.filter((job) => job.firestoreId !== firestoreId));
      await fetchJobs();
      toast.success("Job deleted successfully!");
      return true;
    } catch (error) {
      setError(error.message);
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredJobs = useCallback(() => {
    let jobs = data;

    if (searchQuery) {
      jobs = jobs.filter((job) =>
        job.position.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterByLocation) {
      jobs = jobs.filter((job) =>
        job.location.toLowerCase().includes(filterByLocation.toLowerCase())
      );
    }

    if (filterByContract?.length > 0) {
      jobs = jobs.filter((job) =>
        filterByContract.includes(job.contract.toLowerCase())
      );
    }

    return jobs;
  }, [data, searchQuery, filterByLocation, filterByContract]);

  const myJobs = data.filter((job) => job.postedBy === currentUser?.uid);

  const filteredMyJobs = useCallback(() => {
    let jobs = myJobs;

    if (searchQuery) {
      jobs = jobs.filter((job) =>
        job.position.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterByLocation) {
      jobs = jobs.filter((job) =>
        job.location.toLowerCase().includes(filterByLocation.toLowerCase())
      );
    }

    if (filterByContract?.length > 0) {
      jobs = jobs.filter((job) =>
        filterByContract.includes(job.contract.toLowerCase())
      );
    }

    return jobs;
  }, [myJobs, searchQuery, filterByLocation, filterByContract]);

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
        filteredJobs,
        deleteJob,
        filterByContract,
        setFilterByContract,
        setError,
        myJobs,
        filteredMyJobs,
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
