import useInput from "../../hooks/use-input";

const SearchByLocationPanel = ({ onSubmit }) => {
  const {
    value: enteredLocation,
    isValid: locationIsValid,
    hasError: locationIsInvalid,
    valueInputBlurHandler: locationBlurHandler,
    valueChangeHandler: locationChangeHandler,
    resetHandler: resetLocation,
  } = useInput((value) => value.trim().length >= 3);

  let formIsValid = false;
  if (locationIsValid) {
    formIsValid = true;
  }

  const searchHandler = (event) => {
    event.preventDefault();

    if (locationIsInvalid) {
      return;
    }

    const locData = enteredLocation;

    onSubmit(locData);
    resetLocation();
  };

  const locClasses = locationIsInvalid ? "is-invalid" : "";

  return (
    <aside className="position-relative" data-aos="fade-right">
      <h3>Search pets available by location</h3>
      <form
        className="location-search d-flex search-header"
        onSubmit={searchHandler}
      >
        <input
          className={"form-control " + locClasses}
          type="search"
          placeholder="Enter a location"
          onChange={locationChangeHandler}
          onBlur={locationBlurHandler}
          value={enteredLocation}
        />
        <button className="btn btn-style" disabled={!formIsValid}>
          Search
        </button>
      </form>
      {locationIsInvalid && (
        <p className="invalid-feedback">Invalid Query!</p>
      )}
    </aside>
  );
};

export default SearchByLocationPanel;
