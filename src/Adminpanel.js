import React from "react";
import userImage from "./img/user.png";
import { Link } from "react-router-dom";
import "./userpanel.css";
import { useNavigate } from "react-router-dom";
function AdminPanel() {
    const navigate =useNavigate()
  return (
    <>
        <div className="setting-icon"><p><Link to='/settings'><i className="fa fa-gear"></i></Link></p></div>
      <div className="user-panel">

        <div className="user-info">
          <img src={userImage} alt="" />
        </div>
        <h1>Hi! Ahsan Raza</h1>
        <div className="button">
          <button onClick={() => navigate ('/availability')}> Today's Availability</button>
          <button>Overall Stats</button>

        </div>
      </div>
    </>
  );
}

export default AdminPanel;
