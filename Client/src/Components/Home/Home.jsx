import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homeFirstDiv">
        <div className="homeFirstDivText">
          <h1>Create Models</h1>
          <h2>Simply build your model and see what's good on you</h2>
        </div>
        <div className="homeFirstDivImage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
            <path
              d="m43 42.604-38-20V66a1 1 0 0 0 .534.885L43 86.604zM44 40.87l38-20L44.466 1.115a1.001 1.001 0 0 0-.932 0L6 20.87zM45 42.604v44l37.466-19.72A1 1 0 0 0 83 66V22.604z"
              style={{ fill: "#E8AA42" }}
            />
          </svg>
        </div>
      </div>
    </>
  );
}
