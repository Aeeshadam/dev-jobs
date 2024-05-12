import {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsError,
} from "../state/jobsSlice";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { addJob } from "../state/jobsSlice";

export const fetchJobs = () => async (dispatch) => {
  try {
    dispatch(fetchJobsStart());
    const jobsCollection = await getDocs(collection(db, "jobs"));
    const jobsData = jobsCollection.docs.map((doc) => doc.data());
    console.log(jobsData);
    dispatch(fetchJobsSuccess(jobsData));
  } catch (error) {
    dispatch(fetchJobsError(error.message));
    console.log(error);
  }
};

export const addNewJob = (newJobData) => async (dispatch) => {
  try {
    const currentTimeStamp = new Date().getTime();
    const newJobDataWithTimestamp = {
      ...newJobData,
      timestamp: currentTimeStamp,
    };
    await addDoc(collection(db, "jobs"), newJobDataWithTimestamp);
    dispatch(addJob(newJobDataWithTimestamp));
    console.log("Job added successfully");
    dispatch(fetchJobs());
  } catch (error) {
    console.log(error);
  }
};
