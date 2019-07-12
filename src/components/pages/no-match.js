import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>I'm Sorry, I couldn't find the page you were looking for.</h2>
      <Link to="/">Would you like to return to the Homepage?</Link>
    </div>
  );
}
