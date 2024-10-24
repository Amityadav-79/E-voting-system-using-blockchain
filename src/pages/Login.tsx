import React, { useState, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import { RouteProps } from "react-router";
import LoginLayout from "../layouts/Login";
import * as Yup from "yup";
import axios from "../axios";
import { AuthContext } from "../contexts/Auth";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(3).required("Required"),
});

const Login = (props: RouteProps): JSX.Element => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [error, setError] = useState<any>("");
  const [verified,setVerified] = useState(false)

  function onChange() {
    console.log("Captcha value:", (useState));
    setVerified(true);
  }

  return (
    <div>
      <LoginLayout error={error}>
        <div className="form-container">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              axios
                .post("/auth/login", { ...values })
                .then((res) => {
                  authContext.authenticate(res.data.user, res.data.accessToken);
                })
                .catch((err) => {
                  let error = err.message;
                  if (err?.response?.data)
                    error = JSON.stringify(err.response.data);
                  setError(error);
                });
            }}
          >
            {({ errors, touched, getFieldProps, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...getFieldProps("email")}
                  />
                  <div className="form-error-text">
                    {touched.email && errors.email ? errors.email : null}
                  </div>
                </div>

                <div className="input-container">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...getFieldProps("password")}
                  />
                  <div className="form-error-text">
                    {touched.password && errors.password
                      ? errors.password
                      : null}
                  </div>
                </div>

                <div className="form-info-text">
                <ReCAPTCHA sitekey="6LdWkG0kAAAAAMi-ZVhJwn-UJkd6Gq7-1AovYDP8" onChange={onChange}/>
                </div>

                <button className="login-button button-primary" type="submit" disabled={!verified}>
                  Login
                </button>
              </form>
            )}
          </Formik>

          <div className="form-info-text"></div>

          <hr />

          <button
            onClick={() => navigate("/signup")}
            className="button-secondary"
          >
            Create a New Account
          </button>
        </div>
      </LoginLayout>
    </div>
  );
};

export default Login;