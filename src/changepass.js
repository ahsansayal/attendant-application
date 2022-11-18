import React from "react";
import './changepass.css';
import Signin from "./signin";
import { useNavigate } from "react-router-dom";
const ChangePassword  = () => {
 
  const navigate =useNavigate()
  return (
    <>
      <div className="form">
     
        <div className="form-body">
        <h1>Sign In as User</h1>
          <div className="user-name">
          <i className="fa fa-user"></i>
            <input
              type="text"
              id="firstName"
              placeholder="Username"
            />
          </div>
          <div className="user-name">
          <i className="fa fa-lock"></i>
            <input
              type="text"           
              id="pin-code"
              placeholder="Pincode"
            />
          </div>
        </div>
        <div className="footer">
          <button onClick={Signin} type="submit" className="btn">
            Cancel
          </button>
          <button type="submit" className="btn1" onClick={() => navigate ('/userportal')}>
            Save
          </button>
        </div>
     
      </div>
    </>
  );
};

export default ChangePassword;
