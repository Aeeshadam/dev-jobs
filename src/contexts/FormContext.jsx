import { createContext, useContext, useState } from "react";
import { useJob } from "./JobContext";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    company: "",
    position: "",
    location: "United Kingdom",
    contract: "Full Time",
    website: "",
    description: "",
    requirements: "",
    logo: "",
    role: "",
  });

  const { addJob, data } = useJob();

  const updateField = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const clearFormFields = () => {
    setFormState({
      company: "",
      position: "",
      location: "United Kingdom",
      contract: "Full Time",
      website: "",
      description: "",
      requirements: "",
      logo: "",
      role: "",
    });
  };

  const handleFormSubmit = () => {
    const id = data.length > 0 ? Math.max(...data.map((job) => job.id)) + 1 : 1;
    const newJobData = { ...formState, id };
    addJob(newJobData);
    clearFormFields();
  };

  return (
    <FormContext.Provider
      value={{ ...formState, updateField, handleFormSubmit }}
    >
      {children}
    </FormContext.Provider>
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
