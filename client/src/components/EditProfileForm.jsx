import { useState } from "react";
import { useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";
import AutoComplete from "./UI/AutoComplete";
import RadioButton from "./UI/RadioButton";

const pattern2 = /^\d{5,8}(?:[-\s]\d{4})?$/;

const EditProfileForm = ({ onSubmit, userData }) => {
  const [userAddress, setUserAddress] = useState();
  const [isVolunteer, setIsVolunteer] = useState(
    userData.is_volunteer ? "Yes" : "No"
  );
  const navigation = useNavigation();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

  let {
    value: enteredName,
    isValid: nameisValid,
    hasError: nameisInvalid,
    valueInputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
  } = useInput((value) => value.trim().length >= 3);

  let {
    value: enteredMail,
    isValid: mailIsValid,
    hasError: mailIsInvalid,
    valueInputBlurHandler: mailBlurHandler,
    valueChangeHandler: mailChangeHandler,
  } = useInput((value) => value.includes("@"));

  let {
    value: enteredZip,
    isValid: zipisValid,
    hasError: zipisInvalid,
    valueInputBlurHandler: zipBlurHandler,
    valueChangeHandler: zipChangeHandler,
  } = useInput((value) => pattern2.test(value));

  const onChangeRadio = (e) => {
    setIsVolunteer(e.target.value);
  };

  let formIsValid = false;
  if (
    nameisValid &&
    mailIsValid &&
    zipisValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      nameisInvalid &&
      mailIsInvalid &&
      zipisInvalid
    ) {
      return;
    }

    const newUserData = {
      username: enteredName,
      email: enteredMail,
      is_volunteer: isVolunteer,
      address: {
        ...userAddress,
        zip_code: enteredZip,
      },
    };

    onSubmit(newUserData);
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("user-address").value = "";
    document.getElementById("zip").value = "";
    setIsVolunteer("No");
  };

  const nameClasses = nameisInvalid ? "is-invalid" : "",
    mailClasses = mailIsInvalid ? "is-invalid" : "",
    zipClasses = zipisInvalid ? "is-invalid" : "";

  return (
    <>
      <form className="row mt-4 signup-form" onSubmit={submitHandler}>
        <div className="col-12">
          <input
            type="text"
            className={"form-control " + nameClasses}
            id="username"
            placeholder="Your Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            defaultValue={userData?.name || ""}
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
            defaultValue={userData?.email || ""}
          />
          {mailIsInvalid && <p className="invalid-feedback">Invalid Email!</p>}
        </div>
        <div className="col-12">
          <AutoComplete
            id="user-address"
            placeholder="Your Address (House No. / Building / street)"
            onComplete={setUserAddress}
            defaultValue={userData.address}
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
            defaultValue={userData?.zip_code || ""}
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
              checked={userData.is_volunteer ? true : false}
            />
            <RadioButton
              id="no"
              name="volunteer"
              value="No"
              text="No"
              onChange={onChangeRadio}
              checked={!userData.is_volunteer ? true : false}
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
};

export default EditProfileForm;
