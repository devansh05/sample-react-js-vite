import React from "react";
import styles from "./formInputWithLabel.module.css";

const FormInputWithLabel = ({
  lableTitle,
  name,
  typeInput,
  inputPlaceholder,
  handleChange,
  value,
  handleBlur,
  isRequired = false,
  errorMessage = undefined,
}) => {
  return (
    <div className={`${styles.container}`}>
      <label className={`${styles.label}`} htmlFor={name}>
        {lableTitle}
      </label>
      <input
        name={name}
        type={typeInput}
        value={value}
        onBlur={handleBlur}
        placeholder={inputPlaceholder}
        required={isRequired}
        onChange={handleChange}
        className={styles.input}
      />
      {errorMessage && errorMessage !== undefined && 
      <span className={`${styles.error}`}>{errorMessage}</span>}
    </div>
  );
};

export default FormInputWithLabel;
