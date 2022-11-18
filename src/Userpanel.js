import React from 'react'
import { useNavigate } from 'react-router-dom'
import userImage from "./img/user.png" 
import './userpanel.css'
function UserPanel() {

  const navigate=useNavigate();
  return (
    <>
      <div className='user-panel'>
          <div className='user-info'>
          
          <img src={userImage} alt='' />
          
          </div>
          <h1>Hi! Ahsan Raza</h1>
             <div className='button'>
            <button>Punch Attendance</button>
            <button>Apply for leave</button>
            <button type="submit" className="btn" onClick={() => navigate ('/record')} >
            Watch previous Record
          </button>
          </div>
      </div>
    </>
  )
}

export default UserPanel;
