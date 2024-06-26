import { useState } from "react";
import { useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";
import Alert from "./UI/Alert";
import AutoComplete from "./UI/AutoComplete";
import RadioButton from "./UI/RadioButton";

const pattern = /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[\W]).{8,}$/;
const pattern2 = /^\d{5,8}(?:[-\s]\d{4})?$/;

const EditProfileForm = ({onSubmit, userData}) => {
    const [showPswrd, setShowPswrd] = useState(false);
    const [showConfPswrd, setShowConfPswrd] = useState(false);
    const [userAddress, setUserAddress] = useState();
    const [isVolunteer, setIsVolunteer] = useState("No");
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
      // value: enteredConfPswrd,
      isValid: confPswrdMatched,
      hasError: confpswrdNotMatched,
      valueInputBlurHandler: confPswrdBlurHandler,
      valueChangeHandler: confPswrdChangeHandler,
      resetHandler: resetConfPswrd,
    } = useInput((value) => value === enteredPswrd);
  
    const {
      value: enteredZip,
      isValid: zipisValid,
      hasError: zipisInvalid,
      valueInputBlurHandler: zipBlurHandler,
      valueChangeHandler: zipChangeHandler,
      resetHandler: resetZip,
    } = useInput((value) => pattern2.test(value));
  
    const onChangeRadio = (e) => {
      setIsVolunteer(e.target.value);
    };
  
    let formIsValid = false;
    if (
      nameisValid &&
      mailIsValid &&
      pswrdIsValid &&
      confPswrdMatched &&
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
        zipisInvalid
      ) {
        return;
      }
  
      const newUserData = {
        username: enteredName,
        email: enteredMail,
        password: enteredPswrd,
        is_volunteer: isVolunteer,
        address: {
          ...userAddress,
          zip_code: enteredZip,
        },
      };
  
      onSubmit(newUserData);
      resetName();
      resetMail();
      resetPswrd();
      resetConfPswrd();
      document.getElementById("user-address").value = "";
      setIsVolunteer("No");
      resetZip();
    };
  
    const nameClasses = nameisInvalid ? "is-invalid" : "",
      mailClasses = mailIsInvalid ? "is-invalid" : "",
      passwrdClasses = pswrdIsInvalid ? "is-invalid" : "",
      confPswrdClasses = confpswrdNotMatched ? "is-invalid" : "",
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
              // value={userData.name}
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
              // value={userData.name}
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
              // value={userData.password}
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
              // value={userData.password}
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
            <AutoComplete
              id="user-address"
              placeholder="Your Address (House No. / Building / street)"
              onComplete={setUserAddress}
              // value={userData.address.area}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className={"form-control " + zipClasses}
              id="zip"
              placeholder="Zip Code"
              onChange={zipChangeHandler}
              onBlur={zipBlurHandler}
              // value={userData.address.zip_code}
            />
            {zipisInvalid && (
              <p className="invalid-feedback">Invalid Zip-code!</p>
            )}
          </div>
          <div className="col-md-8 d-flex align-items-center justify-content-between select-volntr">
            <p>Are you a Caretaker of Vets?</p>
            <div className="d-flex gap-4 radio-btn-group">
              <RadioButton
                id="yes"
                name="volunteer"
                value="Yes"
                text="Yes"
                onChange={onChangeRadio}
                // checked={userData.is_volunteer === 'Yes'}
              />
              <RadioButton
                id="no"
                name="volunteer"
                value="No"
                text="No"
                onChange={onChangeRadio}
                setDefault={true}
                // checked={userData.is_volunteer === 'No'}
              />
            </div>
          </div>
          <div className="col-12 mt-4">
            <button
              type="submit"
              className="btn btn-style btn-primary"
              disabled={!formIsValid}
            >
              {isSubmitting ? "Submitting..." : "Modify"}
            </button>
          </div>
        </form>
      </>
    );
}

export default EditProfileForm
