import React from "react";
import { Link, useRouteError } from "react-router-dom";

function MainErrorFallback() {
  const error = useRouteError();
  return (
    <div className="error-container d-flex flex-column justify-content-center align-items-center">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="" />
      </div>
      <div className="content">
        <h1 className="main-heading">This Page is not Available!</h1>
        <h5>Something went wrong... {error.status}</h5>
        <Link to="..">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default MainErrorFallback;
