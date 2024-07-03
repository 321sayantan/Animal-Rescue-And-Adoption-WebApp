import useInput from "../hooks/use-input";

const ContactUsForm = () => {

  const {
    value: enteredName,
    isValid: nameisValid,
    hasError: nameisInvalid,
    valueInputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    resetHandler: resetName,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredSubject,
    isValid: subIsValid,
    hasError: subIsInvalid,
    valueInputBlurHandler: subBlurHandler,
    valueChangeHandler: subChangeHandler,
    resetHandler: resetSub,
  } = useInput((value) => pattern.test(value));

  const {
    value: enteredPetName,
    isValid: petNameIsValid,
    hasError: petNameIsInvalid,
    valueInputBlurHandler: petNameBlurHandler,
    valueChangeHandler: petNameChangeHandler,
    resetHandler: resetPetName,
  } = useInput((value) => value.trim().length >= 3);

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

  return (
    <>
      <form
                className="signin-form"
              >
                <div className="form-input">
                  <input
                    type="text"
                    name="w3lName"
                    id="w3lName"
                    placeholder="Your name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-input">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-input">
                  <textarea
                    name="w3lMessage"
                    id="w3lMessage"
                    placeholder="Your message"
                    required
                    defaultValue={""}
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  />
                </div>
                <div className="text-right">
                  <Link
                    to={`mailto:AdoPet2024@gmail.com?subject=${subject}&body=I am ${name}, ${body}`}
                  >
                    <div className="btn btn-style btn-primary">Submit</div>
                  </Link>
                </div>
              </form>
    </>
  )
}

export default ContactUsForm
