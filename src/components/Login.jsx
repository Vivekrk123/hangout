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
  let username = "";
  let password = "";
  let number;

  const handleUser = (event) => {
    username = event.target.value;
  };
  const handlePassword = (event) => {
    password = event.target.value;
  };
  const handleNumber = (event) => {
    number = event.target.value;
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
          console.log(response.data);

          setstate("otp");

          axios
            .post(url + "log", {
              username: username,
              password: password,
            })
            .then((response) => {
              console.log(response);
              if (response.data == true) {
                console.log("signed up nd in");

                axios
                  .post(url + "otp_gen", {
                    username: username,
                  })
                  .then((response) => {
                    console.log(response);
                    console.log("otp-gen");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleChange = () => {
    state == "login" ? setstate("signup") : setstate("login");
  };

  const Signin = () => {
    return (
      <div className="total row m-0 p-0">
        <div className=" total col-lg-5 col-sm-12 col-12 m-0 p-0 text-center">
          <img src={hangout} alt="image logo" className="img col-8 m-5" />
          <div className="title m-2">Welcome back!</div>
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

              <button
                className="signin btn m-3 mb-0 col-8 col-sm-6"
                onClick={handleClick}
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="signup mt-4 ">
            Don't have account?{" "}
            <button onClick={handleChange} className="btn signin">
              Sign Up
            </button>
          </div>
        </div>
        <div className="col-lg-7 col-0  m-0 p-0">
          <img src={image} id="pic" />
        </div>
      </div>
    );
  };

  const Signup = () => {
    return (
      <div className="total row m-0 p-0">
        <div className=" total col-lg-5 col-sm-12 col-12 m-0 p-0 text-center">
          <img src={hangout} alt="image logo" className="img col-8 m-5" />
          <div className="title m-2">Welcome</div>
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

              <div className="email m-1">Number</div>

              <input
                type="number"
                onChange={handleNumber}
                className="email-input col-12 m-1"
                placeholder=""
              />

              <button
                className="signin btn m-3 mb-0 col-8 col-sm-6"
                onClick={handleClick}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="signup mt-4 ">
            Have an account?{" "}
            <button onClick={handleChange} className="btn signin">
              Sign In
            </button>
          </div>
        </div>
        <div className="col-lg-7 col-0  m-0 p-0">
          <img src={image} id="pic" />
        </div>
      </div>
    );
  };

  const Otp = () => {
    let handleSubmit = () => {
      console.log("submit");
      axios
        .post(url + "verify", {
          otp: number,
        })
        .then((response) => {
          if (response.data == "user verified") {
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let handleResend = () => {};
    return (
      <div className="total row m-0 p-0">
        <div className=" total col-lg-5 col-sm-12 col-12 m-0 p-0 text-center">
          <img src={hangout} alt="image logo" className="img col-8 m-5" />
          <div className="title m-2">Welcome</div>
          <div className="row mt-2">
            <div className="col-1 col-sm-3"></div>
            <div className="col-10 m-0 col-sm-6 text-start">
              <div className="email m-1">Enter OTP</div>

              <input
                type="number"
                onChange={handleNumber}
                className="email-input col-12 m-1"
                placeholder=""
              />

              <button
                className="signin btn m-3 mb-0 col-8 col-sm-6"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="signup mt-4 ">
            Didn't receive message?{" "}
            <button onClick={handleResend} className="btn signin">
              Resend
            </button>
          </div>
        </div>
        <div className="col-lg-7 col-0  m-0 p-0">
          <img src={image} id="pic" />
        </div>
      </div>
    );
  };

  if (state == "login") {
    return <Signin />;
  } else if (state == "signup") {
    return <Signup />;
  } else if (state == "otp") {
    return <Otp />;
  }
};

export default Login;
