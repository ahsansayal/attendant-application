import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { getUserData } from "./api";
const Signin = () => {
  const [user, setUser] = useState("");
  const [pincode, setPincode] = useState("");
  const [userError, setUserError] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [enteredUserName, setEnteredUsername] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  const getUser = async () => {
    const all_users = await getUserData();
    setUser(all_users);
  };
  useEffect(() => {
    getUser();
  }, []);

  // const found = user.find(obj => {
  //   return obj.username;
  // });

  console.log(user);
  //   function loginHandle(e){
  //     if(user===""){
  //       alert("invalid User");
  //     }
  //     if(pincode===""){
  //       alert("invalid Pincode");
  //     }
  //     e.preventDefault()
  //   }

  //   function userHandler(e){
  //       let item=e.target.value;
  //       if (item.length<4 || item.length>10){
  //           setUserError (true);
  //       } else{
  //           setUserError(false);
  //       }
  //   }

  //   function pincodeHandler(e){
  //     let item=e.target.value;
  //     if (item.length<4 || item.length>4){
  //         setPinError (true);
  //     } else{
  //         setPinError(false);
  //     }
  // }
  const navigate = useNavigate();
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
              // onChange={userHandler}
              onChange={(e) => setEnteredUsername(e?.target?.value)}
              // onBlur={userHandler}
              value={enteredUserName}
            />
            {userError ? <span>Invalid User</span> : ""}
          </div>

          <div className="user-name">
            <i className="fa fa-lock"></i>
            <input
              type="text"
              id="pin-code"
              placeholder="Pincode"
              // onChange={pincodeHandler}
              onChange={(e) => setEnteredPassword(e?.target?.value)}
              value={enteredPassword}
            />
            {pinError ? <span>4 digit Pincode</span> : ""}
          </div>
        </div>
        <div className="footer">
          <button
            type="submit"
            className="btn"
            onClick={() => navigate("/userpanel")}
          >
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
          or you are an admin? <Link to="/admin">Signin as admin instead?</Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
