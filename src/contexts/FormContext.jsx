import { createContext, useContext, useState } from "react";
import { useJob } from "./JobContext";
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("United Kingdom");
  const [contract, setContract] = useState("Full Time");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [logo, setLogo] = useState("");
  const [role, setRole] = useState("");
  const { addJob, data } = useJob();

  const emptyFields = () => {
    setCompany("");
    setPosition("");
    setLocation("");
    setContract("");
    setWebsite("");
    setDescription("");
    setRequirements("");
    setLogo("");
    setRole("");
  };

  const handleFormSubmit = (e) => {
    const id = data.length > 0 ? Math.max(...data.map((job) => job.id)) + 1 : 2;
    const newJobData = {
      company,
      position,
      location,
      contract,
      website,
      description,
      requirements,
      role,
      logo,
      id,
    };
    addJob(newJobData);
    emptyFields();
    console.log(data);
  };

  const formState = {
    company,
    setCompany,
    position,
    setPosition,
    location,
    setLocation,
    contract,
    setContract,
    website,
    setWebsite,
    description,
    setDescription,
    requirements,
    setRequirements,
    logo,
    setLogo,
    role,
    setRole,
    handleFormSubmit,
  };

  return (
    <FormContext.Provider value={formState}>{children}</FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

export { useForm, FormProvider };
