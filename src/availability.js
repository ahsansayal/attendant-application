import React from 'react'
import './availability.css'
function availability() {
  return (
    <div className='avail-container'>
      <h1>Today's Availability</h1>
      <div className='search-bar'>
        <input type="text" placeholder='Search Here...' />
      </div>

      <div className="attend-main">

      <div className="attendance">
        <h2>Present</h2>
      </div>
      <div className="attendance">
        <h2>On Leave</h2>
      </div>

      <div className="attendance">
        <h2>Absent</h2>
      </div>
      </div>
    </div>
  )
}

export default availability
