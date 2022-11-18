import React from 'react'
import './record.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Record() {
  return (
    <>
    

    <div className="main-container">

    <div className="x_icon"><p><Link to='/userpanel'>
        <FontAwesomeIcon id='close-icon' icon={faXmark} />
    </Link></p></div>
         <div className="set-title">
      <h1>Attendance Record</h1>
      <h2>Ahsan Raza</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Here..." />
      </div>

      <div className="attend_data">
        
        <div className="employe-attend"><h3>Date</h3></div>
        <div className="employe-attend"><h3>Status</h3></div>

       </div>
    </div>
    </>
  )
}

export default Record;