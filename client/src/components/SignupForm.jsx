import { useState } from "react";
import { useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";
import Alert from "./UI/Alert";
import axios from "axios"

const pattern = /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[\W]).{8,}$/;
const pattern2 = /^\d{5,8}(?:[-\s]\d{4})?$/;

const SignupForm = (props) => {
  const [showPswrd, setShowPswrd] = useState(false);
  const [showConfPswrd, setShowConfPswrd] = useState(false);
  const navigation = useNavigation();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

  const {
    value: enteredName,
    isValid: nameisValid,
    hasError: nameisInvalid,
    valueInputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    resetHandler: resetName,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredMail,
    isValid: mailIsValid,
    hasError: mailIsInvalid,
    valueInputBlurHandler: mailBlurHandler,
    valueChangeHandler: mailChangeHandler,
    resetHandler: resetMail,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPswrd,
    isValid: pswrdIsValid,
    hasError: pswrdIsInvalid,
    valueInputBlurHandler: pswrdBlurHandler,
    valueChangeHandler: pswrdChangeHandler,
    resetHandler: resetPswrd,
  } = useInput((value) => pattern.test(value));

  const {
    value: enteredConfPswrd,
    isValid: confPswrdMatched,
    hasError: confpswrdNotMatched,
    valueInputBlurHandler: confPswrdBlurHandler,
    valueChangeHandler: confPswrdChangeHandler,
    resetHandler: resetConfPswrd,
  } = useInput((value) => value === enteredPswrd);

  const {
    value: enteredAddress,
    isValid: addressisValid,
    hasError: addressisInvalid,
    valueInputBlurHandler: addressBlurHandler,
    valueChangeHandler: addressChangeHandler,
    resetHandler: resetAddress,
  } = useInput((value) => value.trim().length >= 8);

  const {
    value: enteredCity,
    isValid: cityisValid,
    hasError: cityisInvalid,
    valueInputBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
    resetHandler: resetCity,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredZip,
    isValid: zipisValid,
    hasError: zipisInvalid,
    valueInputBlurHandler: zipBlurHandler,
    valueChangeHandler: zipChangeHandler,
    resetHandler: resetZip,
  } = useInput((value) => pattern2.test(value));

  let formIsValid = false;
  if (
    nameisValid &&
    mailIsValid &&
    pswrdIsValid &&
    confPswrdMatched &&
    addressisValid &&
    cityisValid &&
    zipisValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      nameisInvalid &&
      mailIsInvalid &&
      pswrdIsInvalid &&
      confpswrdNotMatched &&
      addressisInvalid &&
      cityisInvalid &&
      zipisInvalid
    ) {
      return;
    }
    
    const userData = {
      username: enteredName,
      email: enteredMail,
      password: enteredPswrd,
      address: {
        street: enteredAddress,
        city: enteredCity,
        zip_code: enteredZip,
      },
    };

    props.onSubmit(userData);
    resetName();
    resetMail();
    resetPswrd();
    resetConfPswrd();
    resetAddress();
    resetCity();
    resetZip();
  };

  const nameClasses = nameisInvalid ? "is-invalid" : "",
    mailClasses = mailIsInvalid ? "is-invalid" : "",
    passwrdClasses = pswrdIsInvalid ? "is-invalid" : "",
    confPswrdClasses = confpswrdNotMatched ? "is-invalid" : "",
    addressClasses = addressisInvalid ? "is-invalid" : "",
    cityClasses = cityisInvalid ? "is-invalid" : "",
    zipClasses = zipisInvalid ? "is-invalid" : "";


  return (
    <>
      {pswrdIsInvalid && (
        <Alert className="alert-danger">
          <div className="alert-heading">Password Should contain:-</div>
          <ul>
            <li>Minimum 8 characters</li>
            <li>Atleast 1 special character ($%!@#^*_)</li>
            <li>Minimum 1 lowercase (a-z)</li>
            <li>Minimum 1 uppercase (A-Z)</li>
            <li>Minimum 1 digit (0-9)</li>
          </ul>
        </Alert>
      )}
      <form className="row mt-4 signup-form" onSubmit={submitHandler}>
        <div className="col-12">
          <input
            type="text"
            className={"form-control " + nameClasses}
            id="username"
            placeholder="Your Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameisInvalid && (
            <p className="invalid-feedback">Invalid username!</p>
          )}
        </div>
        <div className="col-12">
          <input
            type="email"
            className={"form-control " + mailClasses}
            id="email"
            placeholder="Your email address"
            onChange={mailChangeHandler}
            onBlur={mailBlurHandler}
            value={enteredMail}
          />
          {mailIsInvalid && <p className="invalid-feedback">Invalid Email!</p>}
        </div>
        <div className="col-md-6">
          <input
            type={showPswrd ? "text" : "password"}
            className={"form-control " + passwrdClasses}
            id="passwrd"
            placeholder="Your password"
            onChange={pswrdChangeHandler}
            onBlur={pswrdBlurHandler}
            value={enteredPswrd}
          />
          <i
            className={`toggle-password fa-solid ${
              showPswrd ? "fa-eye-slash" : "fa-eye"
            }`}
            onClick={() => setShowPswrd((prev) => !prev)}
          />
        </div>
        <div className="col-md-6">
          <input
            type={showConfPswrd ? "text" : "password"}
            className={"form-control " + confPswrdClasses}
            id="confirmPasswrd"
            placeholder="Confirm Password"
            onChange={confPswrdChangeHandler}
            onBlur={confPswrdBlurHandler}
            value={enteredConfPswrd}
          />
          <i
            className={`toggle-password fa-solid ${
              showConfPswrd ? "fa-eye-slash" : "fa-eye"
            }`}
            onClick={() => setShowConfPswrd((prev) => !prev)}
          />
          {confpswrdNotMatched && (
            <p className="invalid-feedback">Passwords didn't match!</p>
          )}
        </div>
        <div className="col-12">
          <textarea
            id="address"
            className={"form-control " + addressClasses}
            placeholder="Your Address (House No. / Building / street)"
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={enteredAddress}
          />
          {addressisInvalid && (
            <p className="invalid-feedback">Invalid Address!</p>
          )}
        </div>
        <div className="col-md-8">
          <input
            type="text"
            className={"form-control " + cityClasses}
            id="city"
            placeholder="City"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={enteredCity}
          />
          {cityisInvalid && <p className="invalid-feedback">Invalid City!</p>}
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className={"form-control " + zipClasses}
            id="zip"
            placeholder="Zip Code"
            onChange={zipChangeHandler}
            onBlur={zipBlurHandler}
            value={enteredZip}
          />
          {zipisInvalid && (
            <p className="invalid-feedback">Invalid Zip-code!</p>
          )}
        </div>
        <div className="col-12 mt-4">
          <button
            type="submit"
            className="btn btn-style btn-primary"
            disabled={!formIsValid}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
