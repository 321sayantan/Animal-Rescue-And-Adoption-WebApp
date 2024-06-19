import { useState } from "react";
import { useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";
import Alert from "./UI/Alert";

const pattern = /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[\W]).{8,}$/;

const EnterPasswordForm = (props) => {
  const [showPswrd, setShowPswrd] = useState(false);
  const [showConfPswrd, setShowConfPswrd] = useState(false);
  const navigation = useNavigation();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

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

  let formIsValid = false;
  if (pswrdIsValid && confPswrdMatched) formIsValid = true;

  const submitMailHandler = (e) => {
    e.preventDefault();
    if (pswrdIsInvalid && confpswrdNotMatched) {
      return;
    }
    props.onSubmit(enteredPswrd);
    resetPswrd();
    resetConfPswrd();
  };

  const passwrdClasses = pswrdIsInvalid ? "is-invalid" : "",
    confPswrdClasses = confpswrdNotMatched ? "is-invalid" : "";

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
      <form className="row" onSubmit={submitMailHandler}>
        <div className="col-md-6 position-relative">
          <label className="form-label fw-bold">New Password</label>
          <input
            type={showPswrd ? "text" : "password"}
            className={"form-control " + passwrdClasses}
            id="passwrd"
            placeholder="********"
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
        <div className="col-md-6 position-relative">
          <label className="form-label fw-bold">Re-Enter Password</label>
          <input
            type={showConfPswrd ? "text" : "password"}
            className={"form-control " + confPswrdClasses}
            id="confirmPasswrd"
            placeholder="********"
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
        <div className="col-12 mt-4">
          <button
            type="submit"
            className="btn btn-style btn-primary"
            disabled={!formIsValid}
          >
            {isSubmitting ? "Submitting..." : "Reset Password"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EnterPasswordForm;
