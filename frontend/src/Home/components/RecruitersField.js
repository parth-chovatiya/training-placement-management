import React from 'react'
import Button from '@material-ui/core/Button';
// import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

import './RecruitersField.css'

const RecruitersField = () => {
  return (
    <div className="main">
      <div className="company">
        <div className="for">
          For Company
        </div>
        <p className="info">
          Register here to recruit students from Birla Vishvakarma Mahavidyalaya Engineering College through campus placements.
        </p>
        <div className="button">
          <Button variant="outlined" color="primary">
            <Link to="/company/register">
              Register
            </Link>
          </Button>
        </div>
      </div>
      <div className="student">
        <div className="for">
          For Student
        </div>
        <div className="info">
          Register here to seat in campus placement.
        </div>
        {/* <div className="button">
          <Button variant="outlined" color="primary">
            <Link to="/student/register">
              Register
            </Link>
          </Button>
        </div> */}
        <Button variant="outline-primary">Primary</Button>{' '}
        {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
      </div>
    </div>
  )
}

export default RecruitersField
