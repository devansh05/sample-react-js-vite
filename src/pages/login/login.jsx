import React, { useState } from "react";
import styles from "./login.module.css";
import FormInputWithLabel from "../../components/formInputWithLabel/formInputWithLabel";
import useFormValidation from "../../customHooks/useFormValidation";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleChange, handleSubmit } =
    useFormValidation(initialValues);

  const submitForm = () => {
    alert("Login successful!");
    navigate("/dashboard");
  };

  const responseMessage = (response) => {
    console.log("response ", response);
    //Successfull response google login
    //   {
    //     "credential": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMzg3ODQzMzk2MjktOWU1OWNkdDg3b2ZvNnJ1Ym5vdjFwYmYwMmxocTIxM2EuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxMzg3ODQzMzk2MjktOWU1OWNkdDg3b2ZvNnJ1Ym5vdjFwYmYwMmxocTIxM2EuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTU4MDc0MjA3MzEyMjI2ODI2NTMiLCJlbWFpbCI6ImRldmFuc2gyMzkzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MjMyOTIxMzUsIm5hbWUiOiJERVZBTlNIIFNJTkdIIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tGUTFrVzFlMjVNMWpxYkVHaG9wU3F0TGNZdFJ1aGJfV2hZRmlud0lJeHZSbUt4X3hfPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkRFVkFOU0giLCJmYW1pbHlfbmFtZSI6IlNJTkdIIiwiaWF0IjoxNzIzMjkyNDM1LCJleHAiOjE3MjMyOTYwMzUsImp0aSI6Ijg1MDRhOTQwNjJlYTZlMGU0MWI2NjYwY2UyODA5MTdmZDdkNTkwY2EifQ.V-l3huR36VttiMQjNgcU69Fmq1LlRTZVw-nUpjuJ8zYzFp65x3F5hcjRxTz6MdzPtG0d3IhKI4nrtYK2U5Wz8B2BPApsidDK0FnIPSlrEsgvfbIxxL4ZTrFXXRUbGaWTrC2MgYG1oxaw6G2DtMF_Cc8AqeZGgukUyqmGeWWhwrpsFelZfAk48xTcYnvhzo2YoJPLra9I8dym57XSo2InQnYQXWBqwNEhWb53tYTXzPR9QeKss34rV6UbwwFVbLdr-Pav9TIpargAGpB4BwXzADTyHEyzINzd8y7Z3ydxQkRkulb7v5WRDiA2he_lsiCITDXend0sS6saI_fI6MKftw",
    //     "clientId": "138784339629-9e59cdt87ofo6rubnov1pbf02lhq213a.apps.googleusercontent.com",
    //     "select_by": "btn_confirm"
    // }

    navigate("/dashboard");
  };
  const errorMessage = (error) => {
    console.log("error ", error);
  };

  return (
    <div className="">
      <form className={styles.loginContainer} onSubmit={handleSubmit(submitForm)}>
        <h3>LOGIN</h3>
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
        <button type="submit">Login</button>
        
        <h4>OR</h4>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        <h4>OR</h4>
        click here to
        <Link to="/signup" className={styles.lableBold}>
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
