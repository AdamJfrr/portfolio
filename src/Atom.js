import React from "react";
import "./Atom.css";

function Atom() {
  return (
    <div className="atom-container">
      <svg
        width="420"
        height="420"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >

        <ellipse
          cx="200"
          cy="200"
          rx="150"
          ry="50"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="rotate rotate1"
        />


        <ellipse
          cx="200"
          cy="200"
          rx="100"
          ry="200"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="rotate rotate2"
        />


        <ellipse
          cx="200"
          cy="200"
          rx="200"
          ry="100"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="rotate rotate3"
        />
      </svg>
    </div>
  );
}

export default Atom;
