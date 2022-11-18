import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";

import { getAdminData } from "./api";

const Admin = () => {
  const [user, setUser] = useState("");
  // const [pincode, setPincode] = useState("");
  const [userError, setUserError] = useState(false);
  const [pinError, setPinError] = useState(false);

  const [enteredUserName, setEnteredUsername] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  // //================================= api code=================================

  const getAdminUser = async () => {
    const adminUser = await getAdminData();
    setUser(adminUser);
  };

  useEffect(() => {
    getAdminUser();
  }, []);

  const authenticateUser = () => {
    if (
      enteredPassword === user?.pincode &&
      enteredUserName === user?.username
    ) {
      navigate("/adminpanel");
      return;
    }else{
    alert("Wrong username or password");
    }
  };

  //================================= api code=================================

  // function userHandler(e) {
  //   let item = e.target.value;
  //   if (item.length < 4 || item.length > 10) {
  //     setUserError(true);
  //   } else {
  //     setUserError(false);
  //   }
  // if(user === ""){
  //   setUserError(false)
  // } else{
  //   setUserError(true)
  // }

  // }

  // function pincodeHandler(e) {
  //   let item = e.target.value;
  //   if (item.length < 4 || item.length > 4) {
  //     setPinError(true);
  //   } else {
  //     setPinError(false);
  //   }
  //   if (isNaN(item)) {
  //     return false;
  //   }
  //   if (pincode === "") {
  //     alert("invalid Pincode");
  //   }

  //   if(pincode === ""){
  //     setUserError(false)
  //   } else{
  //     setUserError(true)
  //   }
  // }

  const navigate = useNavigate();
  return (
    <>
      <div className="form">
        <div className="form-body">
          <h1>Sign In as Admin</h1>
          <div className="user-name">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEnteredUsername(e?.target?.value)}
              // onBlur={userHandler}
              value={enteredUserName}
            />
            {userError ? <span>Invalid User</span> : ""}
          </div>

          <div className="user-name">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              placeholder="Pincode"
              // onBlur={pincodeHandler}
              onChange={(e) => setEnteredPassword(e?.target?.value)}
              value={enteredPassword}
            />
            {pinError ? <span>4 digit Pincode</span> : ""}
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={authenticateUser}>
            Login
          </button>
        </div>

        <p>or signin as social platforms</p>
        <div className="media-icon">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-google"></i>
          <i className="fa fa-linkedin"></i>
        </div>
        <p>
          or you are an user? <Link to="/signin">Signin as user instead?</Link>
        </p>
      </div>
    </>
  );
};

export default Admin;
