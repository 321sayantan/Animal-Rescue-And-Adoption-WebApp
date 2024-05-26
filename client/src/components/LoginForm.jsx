import { useState } from "react";
import { useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";

const LoginForm = (props) => {
  const [showPswrd, setShowPswrd] = useState(false);
  const navigation = useNavigation();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

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
  } = useInput((value) => value.trim().length >= 8);

  let formIsValid = false;
  if (mailIsValid && pswrdIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (mailIsInvalid && pswrdIsInvalid) {
      return;
    }

    const userLoginData = {
      email: enteredMail,
      password: enteredPswrd,
    };

    props.onSubmit(userLoginData);
    resetMail();
    resetPswrd();
  };

  const mailClasses = mailIsInvalid ? "is-invalid" : "",
    passwrdClasses = pswrdIsInvalid ? "is-invalid" : "";

  return (
    <>
      <form className="signin-form" onSubmit={submitHandler}>
        <div className="col-12 mt-4">
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
        <div className="col-12">
          <input
            type={showPswrd ? "text" : "password"}
            className={"form-control " + passwrdClasses}
            id="password"
            placeholder="Your Password"
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
          {pswrdIsInvalid && <p className="invalid-feedback">Invalid Password!</p>}
        </div>
        <div className="login-btn d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="btn btn-style btn-primary"
            disabled={!formIsValid}
          >
            {isSubmitting ? "Signing in.." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
