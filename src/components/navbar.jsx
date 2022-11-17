import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./navbar.css";
function Navbar(props) {
  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          width: "1440px",
          height: "120px",
          left: "0px",
          top: "0px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "666px",
            height: "56px",
            left: "287px",
            top: "35px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.05)",
            background: "#FFFFFF",
            borderRadius: "30px",
          }}
        >
          <span
            className="bi bi-search"
            style={{
              position: "absolute",
              top: "14px",
              left: "36px",
            }}
          ></span>
          <input
            type="text"
            placeholder="Search"
            style={{
              position: "absolute",
              top: "10px",
              left: "82px",
              width: "500px",
              height: "33px",
            }}
          />
        </div>
        <span
          className="bi bi-compass-fill"
          style={{
            position: "absolute",
            top: "35px",
            left: "984px",
          }}
        ></span>
        <span
          className="bi bi-plus-lg"
          style={{
            position: "absolute",
            top: "37px",
            left: "1074px",
          }}
        ></span>
        <span
          className="bi bi-camera-fill"
          style={{
            position: "absolute",
            top: "37px",
            left: "1164px",
          }}
        ></span>
        <span
          className="bi bi-percent"
          style={{
            position: "absolute",
            top: "40px",
            left: "1272px",
          }}
        ></span>
        <span
          className="bi bi-person-fill"
          style={{
            position: "absolute",
            top: "35px",
            left: "1350px",
          }}
        ></span>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
