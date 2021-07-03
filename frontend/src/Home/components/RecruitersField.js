import React from 'react'
import {Link} from 'react-router-dom'

import './RecruitersField.css'

const RecruitersField = () => {
  return (
    <div className="main">
      <div className="company">
        <div className="for">
          <p>For Company</p>
        </div>
        <p className="info">
          Register here to recruit students from Birla Vishvakarma Mahavidyalaya Engineering College through campus placements.
        </p>
        <Link to="/company/register" className="button">Register</Link>
      </div>
      <div className="student">
        <div className="for">
          <p>For Student</p>
        </div>
        <div className="info">
          Register here to seat in campus placement.
        </div>
        <Link to="/student/register" className="button">Register</Link>
      </div>
    </div>
  )
}

export default RecruitersField
