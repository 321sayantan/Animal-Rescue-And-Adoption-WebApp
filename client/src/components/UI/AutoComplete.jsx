import { useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

const options = {
  componentRestrictions: { country: "IN" }, //for limiting places only in the specified country
  fields: ["geometry", "name"],
  // fields: ["address_components", "geometry", "icon", "name"],
  types: ["establishment"],
};

const AutoComplete = ({ id, placeholder, onComplete, value }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const address = useRef();
  const placeChangeHandler = (place) => {
    address.current = {
      area: ref.current.value,
      coords: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      },
    };
    onComplete(address.current);
    console.log(address.current);
  };
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GMAP_API_KEY,
    onPlaceSelected: placeChangeHandler,
    options: options,
  });

  const addrChangeHandler = (e) => {
    if (e.target.value === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  const addrClasses = isInvalid ? "is-invalid" : "";

  return (
    <>
      <input
        id={id}
        type="text"
        ref={ref}
        className={"form-control " + addrClasses}
        placeholder={placeholder}
        onChange={addrChangeHandler}
        defaultValue=""
        value={value}
      />
      {isInvalid && <p className="invalid-feedback">Improper Location!</p>}
    </>
  );
};
export default AutoComplete;
