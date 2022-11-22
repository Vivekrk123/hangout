import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hangout from "./assets/hangout.svg";
import image from "./assets/image.svg";
//Login Page
axios.defaults.withCredentials = true;
const url = "http://3.86.253.137/users/";

const Login = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState("login");
  const [username, setName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [number, setNumber] = useState(0);
  const handleUser = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const handleClick = () => {
    console.log(username + password + number);
    if (state == "login") {
      axios
        .post(url + "log", {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response.data == true) {
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(url + "add", {
          username: username,
          password: password,
          number: number,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleChange = () => {
    state == "login" ? setstate("signup") : setstate("login");
  };
  return (
    <div className="total row m-0 p-0">
      <div className=" total col-lg-5 col-sm-12 col-12 m-0 p-0 text-center">
        <img src={hangout} alt="image logo" className="img col-8 m-5" />
        <div className="title m-2">
          {state == "login" ? "Welcome back!" : "Welcome"}
        </div>
        <div className="row mt-2">
          <div className="col-1 col-sm-3"></div>
          <div className="col-10 m-0 col-sm-6 text-start">
            <div className="email m-1">Username</div>
            <input
              type="email"
              onChange={handleUser}
              className="email-input col-12 m-1"
              placeholder=""
            />
            <div className="password m-1">Password</div>
            <input
              type="password"
              onChange={handlePassword}
              className="password-input col-12 m-1 mb-2"
              placeholder=""
            />
            {state == "signup" ? <div className="email m-1">Number</div> : null}
            {state == "signup" ? (
              <input
                type="number"
                onChange={handleNumber}
                className="email-input col-12 m-1"
                placeholder=""
              />
            ) : null}
            {state == "login" ? (
              <button
                className="signin btn m-3 mb-0 col-8 col-sm-6"
                onClick={handleClick}
              >
                Sign In
              </button>
            ) : (
              <button
                className="signin btn m-3 mb-0 col-8 col-sm-6"
                onClick={handleClick}
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
        {state == "login" ? (
          <div className="signup mt-4 ">
            Don't have account?{" "}
            <button onClick={handleChange} className="btn signin">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="signup mt-4 ">
            Have an account?{" "}
            <button onClick={handleChange} className="btn signin">
              Sign In
            </button>
          </div>
        )}
      </div>
      <div className="col-lg-7 col-0  m-0 p-0">
        <img src={image} id="pic" />
      </div>
    </div>
  );
};

export default Login;
