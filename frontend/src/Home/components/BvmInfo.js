import React from 'react'

import bvm_logo from '../image/bvm_logo.png'

import classes from './BvmInfo.module.css'

const BvmInfo = () => {
  return (
    <div className={classes.col}>
      <div className={`${classes.row} ${classes.logo}`}>
        <img src={bvm_logo} alt="BVM Logo" width="200px" />
      </div>
      <div className={`${classes.row} ${classes.info}`}>
        <h2>TRAINING AND PLACEMENT CELL</h2>
        <p className={classes.clgname}>Veer Narmad South Gujarat University, Surat</p>
        <p>Destination for the shining future
VNSGU offers Research, PG, Integrated,UG, and Cerificate Programs</p>
        <p>Managed by VNSGU</p>       
      </div>
    </div>
  )
}

export default BvmInfo
