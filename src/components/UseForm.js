import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [studentInfo, setstudentInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(studentInfo));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setstudentInfo(studentInfo => ({ ...studentInfo, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    studentInfo,
    errors,
  }
};

export default useForm;