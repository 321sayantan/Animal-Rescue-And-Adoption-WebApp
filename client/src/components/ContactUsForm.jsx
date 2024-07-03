import useInput from "../hooks/use-input";

const ContactUsForm = ({ onSubmit }) => {
  const {
    value: enteredName,
    isValid: nameisValid,
    hasError: nameisInvalid,
    valueInputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredSubject,
    isValid: subIsValid,
    hasError: subIsInvalid,
    valueInputBlurHandler: subBlurHandler,
    valueChangeHandler: subChangeHandler,
  } = useInput((value) => value.trim().length >= 5);

  const {
    value: enteredBody,
    isValid: bodyIsValid,
    hasError: bodyIsInvalid,
    valueInputBlurHandler: bodyBlurHandler,
    valueChangeHandler: bodyChangeHandler,
  } = useInput((value) => value.trim().length >= 8);

  let formIsValid = false;
  if (nameisValid && subIsValid && bodyIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (nameisInvalid && subIsInvalid && bodyIsInvalid) {
      return;
    }

    const contactMailData = {
      username: enteredName,
      subject: enteredSubject,
      body: enteredBody,
    };

    onSubmit(contactMailData);
    document.getElementById("username").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("messageBody").value = "";
  };

  const nameClasses = nameisInvalid ? "is-invalid" : "",
    subjectClasses = subIsInvalid ? "is-invalid" : "",
    bodyClasses = bodyIsInvalid ? "is-invalid" : "";

  return (
    <>
      <form className="row signin-form" onSubmit={submitHandler}>
        <div className="col-12">
          <input
            type="text"
            className={"form-control " + nameClasses}
            id="username"
            placeholder="Your Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameisInvalid && (
            <p className="invalid-feedback">Invalid username!</p>
          )}
        </div>
        <div className="col-12">
          <input
            type="text"
            className={"form-control " + subjectClasses}
            id="subject"
            placeholder="Subject"
            onChange={subChangeHandler}
            onBlur={subBlurHandler}
          />
          {subIsInvalid && (
            <p className="invalid-feedback">Improper Subject!</p>
          )}
        </div>
        <div className="col-12">
          <textarea
            id="messageBody"
            placeholder="Your message"
            className={"form-control " + bodyClasses}
            onChange={bodyChangeHandler}
            onBlur={bodyBlurHandler}
            style={{ height: "18rem" }}
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="btn btn-style btn-primary"
            disabled={!formIsValid}
          >
            Submit
          </button>
          {/* <Link
            to={`mailto:AdoPet2024@gmail.com?subject=${subject}&body=I am ${name}, ${body}`}
          >
            <div className="btn btn-style btn-primary">Submit</div>
          </Link> */}
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
