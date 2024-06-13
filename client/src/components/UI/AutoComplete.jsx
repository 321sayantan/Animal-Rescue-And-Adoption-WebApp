import { useRef, useEffect, useState } from "react";

const AutoComplete = ({ id, placeholder, onComplete, onCheck }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const address = useRef();
  const options = {
    componentRestrictions: { country: "IN" }, //for limiting places only in the specified country
    fields: ["geometry"],
    // fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      try {
        const place = await autoCompleteRef.current.getPlace();
        const res = place;
        const latitude = res.geometry.location.lat();
        const longitude = res.geometry.location.lng();
        address.current = {
          area: inputRef.current.value,
          coords: {
            latitude,
            longitude,
          },
        };
        onComplete(address.current);
      } catch (err) {
        console.error(err);
      }
    });
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
        ref={inputRef}
        className={"form-control " + addrClasses}
        placeholder={placeholder}
        onChange={addrChangeHandler}
        // value={value}
      />
      {isInvalid && <p className="invalid-feedback">Improper Location!</p>}
    </>
  );
};
export default AutoComplete;
