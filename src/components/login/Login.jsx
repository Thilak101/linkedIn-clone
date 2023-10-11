import React, { useEffect } from "react";
import "./login.css";
import { Button } from "@mui/material";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";
import logo from "../../assets/logo.png";

const Login = ({ setUser }) => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="login">
      <div className="login__section">
        <div className="login__container">
          <div className="login__logo">
            <img src={logo} alt="" />
          </div>
          <div className="login__heading">
            <h1>Login in</h1>
            <small style={{ color: "gray" }}>Crate account</small>
          </div>
        </div>
        <div className="login__form">
          <form action="">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <small className="login__forgot">Forgot Password?</small>
          </form>
          <button className="login__button" onClick={signIn}>login</button>

          <small className="login__sign-in">
            Already have account please sign-in
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
