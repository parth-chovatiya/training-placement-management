import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PlacementNav.module.css'

const PlacementNav = () => {
  return (
    <div className="">
      <ul className={`${classes['list-group']} ${classes['sidebar-nav']}`}>
        <li className={`${classes['list-group-item']}`}>
          <Link to="/placements">Training & Placement Cell</Link>
        </li>
        <li className={`${classes['list-group-item']}`}>
          <Link to="/placements/placements_records">Placement Record</Link>
        </li>
        <li className={`${classes['list-group-item']}`}>
          <Link to="#">Associated Recruiters</Link>
        </li>
        <li className={`${classes['list-group-item']}`}>
          <Link to="#">Recruiters Speak</Link>
        </li>
        <li className={`${classes['list-group-item']}`}>
          <Link to="#">Placement Gallery</Link>
        </li>
      </ul>
    </div>
  )
}

export default PlacementNav
