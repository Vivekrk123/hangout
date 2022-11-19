import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hangout from "./assets/hangout.svg";
import { Link } from "react-router-dom";
import image from "./assets/image.svg";
//Login Page

const Login = () => {
  return (
    <div className="total row m-0 p-0">
      <div className=" total col-lg-5 col-sm-12 col-12 m-0 p-0 text-center">
        <img src={hangout} alt="image logo" className="img col-8 m-5" />
        <div className="title m-2">Welcome back!</div>
        <div className="row mt-2">
          <div className="col-1 col-sm-3"></div>
          <div className="col-10 m-0 col-sm-6 text-start">
            <div className="email m-1">Email</div>
            <input
              type="email"
              className="email-input col-12 m-1"
              placeholder=""
            />
            <div className="password m-1">Password</div>
            <input
              type="password"
              className="password-input col-12 m-1 mb-2"
              placeholder=""
            />

            <button className="btn m-3 mb-0 col-8 col-sm-6">
              {" "}
              <Link to="/" className="signin ">
                {" "}
                Sign In{" "}
              </Link>
            </button>
          </div>
        </div>{" "}
        <div className="signup mt-4 ">
          Don't have account? <strong>Sign Up</strong>
        </div>
      </div>
      <div className="col-lg-7 col-0  m-0 p-0">
        <img src={image} id="pic" />
      </div>
    </div>
  );
};

export default Login;
