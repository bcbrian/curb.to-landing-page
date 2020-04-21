import React from "react";
import "./styles.css";

import backgroundImg from "./img/nathan-dumlao.jpg";

export default function App() {
  const str = backgroundImg;
  return (
    <div
      className="App"
      style={{
        color: "white",
        height: "100%",
        width: "100%",
        position: "relative",

        backgroundSize: "cover",
        background: `url(https://images.unsplash.com/photo-1583522478890-b2f0660c1a93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) no-repeat center center fixed`
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "#66339999"
        }}
      />
      <div className="title-container">
        <h1
          style={{
            position: "relative"
          }}
        >
          Curb To
        </h1>
        <h2
          style={{
            position: "relative"
          }}
        >
          We are here to help Mom and Pop shops fulfill curbside orders
        </h2>
      </div>

      <p
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: "12px"
        }}
      >
        Photo by Nathan Dumlao on Unsplash
      </p>
    </div>
  );
}
