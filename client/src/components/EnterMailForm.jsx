import useInput from "../hooks/use-input";
import { useNavigation } from "react-router-dom";

const EnterMailForm = (props) => {
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

  let formIsValid = false;
  if (mailIsValid) formIsValid = true;

  const submitMailHandler = (e) => {
    e.preventDefault();
    if (mailIsInvalid) {
      return;
    }
    props.onSubmit(enteredMail);
    resetMail();
  };

  const mailClasses = mailIsInvalid ? "is-invalid" : "";

  return (
    <>
      <form className="row" onSubmit={submitMailHandler}>
        <div className="col-12">
          <label className="form-label fw-bold">
            Enter your email address to reset your password
          </label>
          <input
            type="email"
            className={"form-control " + mailClasses}
            id="email"
            placeholder="john@gmail.com"
            onChange={mailChangeHandler}
            onBlur={mailBlurHandler}
            value={enteredMail}
          />
          {mailIsInvalid && <p className="invalid-feedback">Invalid Email!</p>}
        </div>
        <div className="col-12 mt-4">
          <button
            type="submit"
            className="btn btn-style btn-primary"
            disabled={!formIsValid}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EnterMailForm;
