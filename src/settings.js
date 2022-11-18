import React from "react";
import "./settings.css";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Setting() {

const del=useNavigate()
const [popup,setPop]=useState(false);
const handleClickOpen=()=>{
    setPop(!popup);
}
  return (
    <>
    <div className="set-title">
      <h1>Settings</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Here..." />
      </div>

       <div className="data">
        
        <div className="employe-info"><h3>Name</h3></div>
        <div className="employe-info"><h3>Position</h3></div>
        <div className="employe-info"><h3>Email</h3></div>
        <div className="employe-info"><h3>Total Hrs.</h3></div>
        <div className="employe-info"><h3>Daily Average hrs.</h3></div>
       
        <div className="employe-info1"><h3>Actions</h3>
        <button id="delete-button" onClick={() => del ('/signin')}>Delete</button>
        <button id="edit-button" onClick={handleClickOpen}>Edit</button>
        
       </div>
       <div>
       {popup?
       <div className="main-popup">
        
            <div className="popup">
            <div className="x_icon"><p><Link to='/settings'>
        <FontAwesomeIcon id='close-icon' icon={faXmark} />
    </Link></p></div>
                <div className="popup-title">
                <h2>Edit Info.</h2>
                </div>

                  <div className="pop-input">
                  <input type="text" placeholder="Enter First Name" />
                  <input type="text" placeholder="Enter Last Name" />
                  <input type="text" placeholder="Position" />
                  <input type="text" placeholder="Email" />
                  </div>

                  <div className="pop-button">
                   <button id="Cancel-button">Cancel</button>
                   <button>Save</button>
                   </div>
                  
                
            </div>
        </div> :""}
        </div>
</div>


      <form className="addform1">
        <div className="add-title">
          <h1>Add employee</h1> 
        </div>
        <div className="employee-entry">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
          <div>
            <label>Dept.</label>
            <input type="text" placeholder="Dept." />
          </div>
          <div>
            <label>Position</label>
            <input type="text" placeholder="Position" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
        </div>
        <button>ADD</button>
      </form>

      <form className="addform1">
        <div className="add-title">
          <h1>Change Office Hours</h1>
        </div>
        <div className="employee-entry1">
          <div>
            <label>Start Time</label>
            <input
              type="text"
              onfocus="(this.type='time')"
              placeholder="09:00 A.M"
            />
          </div>
          <div>
            <label>Finish Time</label>
            <input type="text" placeholder="06:00 P.M" />
          </div>
          <div>
            <label>Work Hrs</label>
            <input type="number" placeholder="8" />
          </div>
        </div>
        <button>Change</button>
      </form>
    </>
  );
}

export default Setting;
