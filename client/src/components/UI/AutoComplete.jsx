import { useRef, useEffect, useState } from "react";

const AutoComplete = ({ id, onComplete, onCheck }) => {
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

  const addrClasses = isInvalid ? "is-invalid" : "";

  const addrChangeHandler = (e) => {
    if (e.target.value === "") {
      setIsInvalid(true);
      onCheck(isInvalid);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <>
      <input
        id={id}
        type="text"
        ref={inputRef}
        className={"form-control " + addrClasses}
        placeholder="Location (location of the vet...)"
        onChange={addrChangeHandler}
        // value={value}
      />
    </>
  );
};
export default AutoComplete;
