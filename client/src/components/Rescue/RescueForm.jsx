import { useState } from "react";
import { useNavigation } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { rescueCategList as categories } from "../../utils/misc";
import RadioButton from "../UI/RadioButton";
import AutoComplete from "../UI/AutoComplete";
import CheckBox from "../UI/CheckBox";
import ImageUploader from "../ImageUploader";
import { toast } from "react-toastify";
import Alert from "../UI/Alert";

const pattern1 = /^\+?\d[\d -]{8,12}\d$/; //for phone no
const pattern2 = /^\d{5,8}(?:[-\s]\d{4})?$/; //for zip-code

const RescueForm = (props) => {
  const navigation = useNavigation();
  const [errors, setErrors] = useState(null);
  const [rescLoc, setRescLoc] = useState();
  const [selGender, setSelGender] = useState("Unknown");
  const [vetImage, setVetImage] = useState();
  const [status, setStatus] = useState({
    statusCons: ["vaccinated"],
    response: ["vaccinated"],
  });

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
    value: enteredDescription,
    isValid: descrisValid,
    hasError: descrisInvalid,
    valueInputBlurHandler: descrBlurHandler,
    valueChangeHandler: descrChangeHandler,
    resetHandler: resetDescr,
  } = useInput((value) => value.trim().length >= 20);

  const {
    value: selectedType,
    isValid: typeIsValid,
    hasError: typeIsInvalid,
    valueInputBlurHandler: typeBlurHandler,
    valueChangeHandler: typeChangeHandler,
    resetHandler: resetType,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: enteredMob,
    isValid: mobIsValid,
    hasError: mobIsInvalid,
    valueInputBlurHandler: mobBlurHandler,
    valueChangeHandler: mobChangeHandler,
    resetHandler: resetMob,
  } = useInput((value) => pattern1.test(value));

  const {
    value: enteredZip,
    isValid: zipisValid,
    hasError: zipisInvalid,
    valueInputBlurHandler: zipBlurHandler,
    valueChangeHandler: zipChangeHandler,
    resetHandler: resetZip,
  } = useInput((value) => pattern2.test(value));

  let formIsValid = false;
  if (typeIsValid && descrisValid && zipisValid && nameisValid && mobIsValid) {
    formIsValid = true;
  }

  const onChangeStatus = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { statusCons } = status;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setStatus({
        statusCons: [...statusCons, value],
        response: [...statusCons, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setStatus({
        statusCons: statusCons.filter((e) => e !== value),
        response: statusCons.filter((e) => e !== value),
      });
    }
  };

  const onChangeRadio = (e) => {
    setSelGender(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      if (
        typeIsInvalid &&
        descrisInvalid &&
        zipisInvalid &&
        nameisInvalid &&
        mobIsInvalid
      ) {
        return;
      }

      const rescueData = {
        vet_category: selectedType,
        gender: selGender,
        health_status: status.response,
        description: enteredDescription,
        rescuer_name: enteredName,
        rescuer_mob: enteredMob,
        images: [...vetImage],
        loc_of_found: {
          ...rescLoc,
          zip_code: enteredZip,
        },
      };

      props.onSubmit(rescueData);
      resetType();
      resetName();
      resetMob();
      resetDescr();
      document.getElementById("location").value = "";
      document.getElementById("vet_image").value = "";
      setSelGender("Unknown");
      setStatus({
        statusCons: ["vaccinated"],
        response: ["vaccinated"],
      });
      resetZip();
    } catch (error) {
      setErrors(error);
      console.error(error);
    }
  };

  const nameClasses = nameisInvalid ? "is-invalid" : "",
    animalTypeClasses = typeIsInvalid ? "is-invalid" : "",
    mobileNumClasses = mobIsInvalid ? "is-invalid" : "",
    descrClasses = descrisInvalid ? "is-invalid" : "",
    zipClasses = zipisInvalid ? "is-invalid" : "";

  return (
    <>
      {errors && (
        <Alert>
          {Object.keys(errors).map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </Alert>
      )}
      <form className="row mt-4 rescue-form" onSubmit={submitHandler}>
        <div className="col-md-4">
          <select
            className={"form-select " + animalTypeClasses}
            id="animal-type"
            onChange={typeChangeHandler}
            onBlur={typeBlurHandler}
            value={selectedType}
          >
            <option value="" disabled>
              Animal Type
            </option>
            {categories.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          {typeIsInvalid && (
            <p className="invalid-feedback">Please select a category!</p>
          )}
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-between select-gender">
          <p>Gender</p>
          <div className="d-flex gap-2 radio-btn-group">
            <RadioButton
              id="Male"
              name="gender"
              value="Male"
              text="Male"
              onChange={onChangeRadio}
              // checked={theme.dark}
            />
            <RadioButton
              id="Female"
              name="gender"
              value="Female"
              text="Female"
              onChange={onChangeRadio}
              // checked={theme.light}
            />
            <RadioButton
              id="Unknown"
              name="gender"
              value="Unknown"
              text="Unknown"
              onChange={onChangeRadio}
              setDefault={true}
              // checked={theme.light}
            />
          </div>
        </div>
        <div className="col-12 py-4 d-flex align-items-center justify-content-between select-status">
          <p>Health status</p>
          <div className="d-flex gap-4 checkbox-group">
            <CheckBox
              id="vaccinated"
              name="health-status"
              value="vaccinated"
              text="Vaccinated"
              onChange={onChangeStatus}
              setDefault={true}
              // checked={theme.dark}
            />
            <CheckBox
              id="heavily-injured"
              name="health-status"
              value="heavily-injured"
              text="Heavily-injured"
              onChange={onChangeStatus}
              // checked={theme.light}
            />
            <CheckBox
              id="needs-Medical-attention"
              name="health-status"
              value="needs Medical attention"
              text="Needs Medical attention"
              onChange={onChangeStatus}
              // checked={theme.light}
            />
          </div>
        </div>
        <div className="col-md-8">
          <AutoComplete
            id="location"
            placeholder="Location of the incident (place where found)"
            onComplete={setRescLoc}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className={"form-control " + zipClasses}
            autoComplete="false"
            placeholder="Zip Code"
            onChange={zipChangeHandler}
            onBlur={zipBlurHandler}
            value={enteredZip}
          />
          {zipisInvalid && (
            <p className="invalid-feedback">Invalid Zip-code!</p>
          )}
        </div>
        <div className="col-12">
          <ImageUploader
            id="vet_image"
            onUploaded={setVetImage}
            multiple={true}
          />
        </div>
        <div className="col-12">
          <textarea
            id="description"
            className={"form-control " + descrClasses}
            placeholder="Some descriptions / current medications given to the vet..."
            onChange={descrChangeHandler}
            onBlur={descrBlurHandler}
            value={enteredDescription}
          />
          {descrisInvalid && (
            <p className="invalid-feedback">Description too short!</p>
          )}
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
          <input
            type="number"
            className={"form-control " + mobileNumClasses}
            autoComplete="false"
            placeholder="Phone"
            onChange={mobChangeHandler}
            onBlur={mobBlurHandler}
            value={enteredMob}
          />
          {mobIsInvalid && (
            <p className="invalid-feedback">Invalid Phone Number!</p>
          )}
        </div>
        <div className="col-12 mt-4">
          <button
            type="submit"
            className="btn btn-style btn-primary"
            disabled={!formIsValid}
          >
            {isSubmitting ? "Submitting..." : "Send Request"}
          </button>
        </div>
      </form>
    </>
  );
};

export default RescueForm;
