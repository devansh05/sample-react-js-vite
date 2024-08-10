import React, { useState } from "react";
import styles from "./signup.module.css";
import FormInputWithLabel from "../../components/formInputWithLabel/formInputWithLabel";
import useFormValidation from "../../customHooks/useFormValidation";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
    phone: "",
  };

  const { values, errors, handleChange, handleSubmit } =
    useFormValidation(initialValues);

  const submitForm = () => {
    alert("SignUp successful!");
  };

  return (
    <div>
      <form className={styles.loginContainer} onSubmit={handleSubmit(submitForm)}>
        <h3>SIGN UP</h3>
        <FormInputWithLabel
          lableTitle={"Email"}
          name={"email"}
          typeInput={"email"}
          value={values.email}
          inputPlaceholder="Enter your email"
          handleBlur={handleChange}
          handleChange={handleChange}
          isRequired={true}
          errorMessage={errors.email}
        />
        <FormInputWithLabel
          lableTitle={"Password"}
          name={"password"}
          typeInput={"password"}
          value={values.password}
          inputPlaceholder="Enter your password"
          handleBlur={handleChange}
          handleChange={handleChange}
          isRequired={true}
          errorMessage={errors.password}
        />
        <FormInputWithLabel
          lableTitle={"Name"}
          name={"name"}
          typeInput={"text"}
          value={values.name}
          inputPlaceholder="Enter your name"
          handleBlur={handleChange}
          handleChange={handleChange}
          isRequired={true}
          errorMessage={errors.name}
        />
        <FormInputWithLabel
          lableTitle={"Phone"}
          name={"phone"}
          typeInput={"number"}
          value={values.phone}
          inputPlaceholder="Enter your contact number"
          handleBlur={handleChange}
          handleChange={handleChange}
          isRequired={false}
          errorMessage={errors.phone}
        />

        <button type="submit">Signup</button>
        <h4>OR</h4>
        <div>
          click here to <t/>
          <Link to="/" className={styles.lableBold}>
            LogIn
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
