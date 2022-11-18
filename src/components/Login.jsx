import { Link } from "react-router-dom";
import hangout from "../assets/hangout.svg";
import "./login.css";
import image from "../assets/image.svg";

const Login = () => {
  return (
    <div>
      <img src={hangout} alt="image logo" className="img" />
      <div className="title">Welcome back!</div>

      <div className="email">Email</div>
      <input
        type="email"
        className="email-input"
        placeholder="Enter your mail"
      />
      <div className="password">Password</div>
      <input
        type="password"
        className="password-input"
        placeholder="password"
      />
      <button className="btn">
        {" "}
        <Link to="/" className="signin">
          {" "}
          Sign In{" "}
        </Link>
      </button>
      <div className="signup">
        Don't have account? <strong>Sign Up</strong>
      </div>
      <img src={image} alt="" className="pic" />
    </div>
  );
};

export default Login;
