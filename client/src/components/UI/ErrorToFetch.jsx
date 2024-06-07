// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import { toasterVariants } from "../../utils/misc";

const ErrorToFetch = ({ error }) => {
  return (
    <>
      <div className="container flex-column error-block">
        <h2>An error occured!</h2>
        <p>{error.info?.message || "Something went wrong!"}</p>
      </div>
    </>
  );
};

export default ErrorToFetch;
