import { useNavigation } from "react-router-dom";
import { useState } from "react";
import useInput from "../hooks/use-input";
import AutoComplete from "./UI/AutoComplete";
import RadioButton from "./UI/RadioButton";
import { petCategList as categories } from "../utils/misc";
import ImageUploader from "./ImageUploader";

const pattern = /^\+?\d[\d -]{8,12}\d$/,
  pattern2 = /^\d{4,6}(?:[-\s]\d{4})?$/;

const NewPostForm = (props) => {
  const [donorAddress, setDonorAddress] = useState();
  const [vetImage, setVetImage] = useState();
  const [isVaccinated, setIsVaccinated] = useState("Yes");
  const navigation = useNavigation();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

  const {
    value: enteredDonorName,
    isValid: donorNameisValid,
    hasError: donorNameisInvalid,
    valueInputBlurHandler: donorNameBlurHandler,
    valueChangeHandler: donorNameChangeHandler,
    resetHandler: resetDonorName,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredMob,
    isValid: mobIsValid,
    hasError: mobIsInvalid,
    valueInputBlurHandler: mobBlurHandler,
    valueChangeHandler: mobChangeHandler,
    resetHandler: resetMob,
  } = useInput((value) => pattern.test(value));

  const {
    value: enteredPetName,
    isValid: petNameIsValid,
    hasError: petNameIsInvalid,
    valueInputBlurHandler: petNameBlurHandler,
    valueChangeHandler: petNameChangeHandler,
    resetHandler: resetPetName,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredBreed,
    isValid: breedIsValid,
    hasError: breedInvalid,
    valueInputBlurHandler: breedBlurHandler,
    valueChangeHandler: breedChangeHandler,
    resetHandler: resetBreed,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: selectedCategory,
    isValid: categoryIsValid,
    hasError: categoryIsInvalid,
    valueInputBlurHandler: categoryBlurHandler,
    valueChangeHandler: categoryChangeHandler,
    resetHandler: resetCategory,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: enteredDescription,
    isValid: descrisValid,
    hasError: descrisInvalid,
    valueInputBlurHandler: descrBlurHandler,
    valueChangeHandler: descrChangeHandler,
    resetHandler: resetDescr,
  } = useInput((value) => value.trim().length >= 20);

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
    donorNameisValid &&
    mobIsValid &&
    petNameIsValid &&
    categoryIsValid &&
    breedIsValid &&
    zipisValid &&
    descrisValid
  ) {
    formIsValid = true;
  }

  const onChangeRadio = (e) => {
    setIsVaccinated(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      donorNameisInvalid &&
      mobIsInvalid &&
      petNameIsInvalid &&
      categoryIsInvalid &&
      breedInvalid &&
      zipisInvalid &&
      descrisInvalid
    ) {
      return;
    }

    const postVetData = {
      donor: {
        donor_name: enteredDonorName,
        phone: enteredMob,
        address: {
          ...donorAddress,
          zip_code: enteredZip,
        },
      },
      vet: {
        pet_name: enteredPetName,
        category: selectedCategory,
        breed: enteredBreed,
        is_vaccinated: isVaccinated,
        ...vetImage,
        description: enteredDescription,
      },
    };
    console.log(postVetData);
    props.onSubmit(postVetData);
    resetDonorName();
    resetMob();
    document.getElementById("location-input").value = "";
    document.getElementById("pet_image").value = "";
    setIsVaccinated("Yes");
    resetCategory();
    resetPetName();
    resetBreed();
    resetZip();
    resetDescr();
  };

  const donorNameClasses = donorNameisInvalid ? "is-invalid" : "",
    petNameClasses = petNameIsInvalid ? "is-invalid" : "",
    petCategClasses = categoryIsInvalid ? "is-invalid" : "",
    mobileNumClasses = mobIsInvalid ? "is-invalid" : "",
    breedClasses = breedInvalid ? "is-invalid" : "",
    descrClasses = descrisInvalid ? "is-invalid" : "",
    zipClasses = zipisInvalid ? "is-invalid" : "";

  return (
    <form className="row mt-4 add-new-post" onSubmit={submitHandler}>
      <fieldset className="row mb-4">
        <legend>Donor Info</legend>
        <div className="col-md-6">
          <input
            type="text"
            className={"form-control " + donorNameClasses}
            autoComplete="false"
            placeholder="Donor's Name"
            onChange={donorNameChangeHandler}
            onBlur={donorNameBlurHandler}
            value={enteredDonorName}
          />
          {donorNameisInvalid && (
            <p className="invalid-feedback">Invalid Name!</p>
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
        <div className="col-md-8">
          <AutoComplete
            id="location-input"
            placeholder="Location (location of the vet...)"
            onComplete={setDonorAddress}
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
      </fieldset>

      <fieldset className="row mt-4">
        <legend>Vet Info</legend>
        <div className="col-md-6">
          <input
            type="text"
            className={"form-control " + petNameClasses}
            autoComplete="false"
            placeholder="Your Pet's Name"
            onChange={petNameChangeHandler}
            onBlur={petNameBlurHandler}
            value={enteredPetName}
          />
          {petNameIsInvalid && (
            <p className="invalid-feedback">Invalid Pet Name!</p>
          )}
        </div>
        <div className="col-md-6">
          <select
            className={"form-select " + petCategClasses}
            id="category"
            onChange={categoryChangeHandler}
            onBlur={categoryBlurHandler}
            value={selectedCategory}
          >
            <option value="" disabled>
              Category
            </option>
            {categories.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          {categoryIsInvalid && (
            <p className="invalid-feedback">Please select a category!</p>
          )}
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className={"form-control " + breedClasses}
            autoComplete="false"
            placeholder="Pet's Breed"
            onChange={breedChangeHandler}
            onBlur={breedBlurHandler}
            value={enteredBreed}
          />
          {breedInvalid && <p className="invalid-feedback">Invalid Breed!</p>}
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-between select-vaccinated">
          <p>Neutralised/Vaccinated</p>
          <div className="d-flex gap-4 radio-btn-group">
            <RadioButton
              id="Yes"
              name="vaccinated"
              value="Yes"
              text="Yes"
              onChange={onChangeRadio}
              setDefault={true}
              // checked={theme.dark}
            />
            <RadioButton
              id="No"
              name="vaccinated"
              value="No"
              text="No"
              onChange={onChangeRadio}
              // checked={theme.light}
            />
          </div>
        </div>
        <div className="col-12">
          <ImageUploader id="pet_image" onUploaded={setVetImage} label="Choose an image of your pet" />
        </div>
        <div className="col-12">
          <textarea
            id="description"
            className={"form-control " + descrClasses}
            placeholder="Some descriptions and fav quotations for your vet..."
            onChange={descrChangeHandler}
            onBlur={descrBlurHandler}
            value={enteredDescription}
          />
          {descrisInvalid && (
            <p className="invalid-feedback">Description too short!</p>
          )}
        </div>
      </fieldset>
      <div className="col-12 mt-4">
        <button
          type="submit"
          className="btn btn-style btn-primary"
          disabled={!formIsValid}
        >
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
