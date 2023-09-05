import { useState } from "react";

const useForm = (initialState, onSubmitCallback) => {
  const [formState, setFormState] = useState(initialState);
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formState);

    if (Object.keys(validationErrors).length === 0) {
      onSubmitCallback(formState);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (formData.email.length < 5) {
      errors.email = "Email length should be greater than 5 characters";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid Email entered";
    }

    return errors;
  };

  return {
    formState,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
