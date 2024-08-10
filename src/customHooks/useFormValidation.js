import { useState } from "react";
import { validateValues } from "../utils/validations/validations";

function useFormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    const validationErrors = validateValues(values);
    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();

    const validationErrors = validateValues(values);
    setErrors(validationErrors);

    const noErrors = Object.keys(validationErrors).length === 0;
    if (noErrors) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
export default useFormValidation;
