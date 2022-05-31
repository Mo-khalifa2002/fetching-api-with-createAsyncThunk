import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Not found</h1>
      <Link to="/">
        <h3>go home</h3>
      </Link>
    </div>
  );
};

export default NotFound;
