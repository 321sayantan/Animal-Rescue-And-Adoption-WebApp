import React from "react";

const Alert = ({ className, children }) => {
  const alertClasses = `alert ${className ? "alert-danger" : ""}`;
  return <div className={alertClasses}>{children}</div>;
};

export default Alert;
