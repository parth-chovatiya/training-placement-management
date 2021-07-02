import React from 'react'

import bvm_logo from '../image/bvm_logo.png'

import './BvmInfo.css'

const BvmInfo = () => {
  return (
    <div className="col">
      <div className="row logo">
        <img src={bvm_logo} alt="BVM Logo" width="200px" />
      </div>
      <div className="row info">
        <h2>TRAINING AND PLACEMENT CELL</h2>
        <p>Engineering College, Vallabh Vidyanagar</p>
        <p>[An Autonomous Institution]</p>
        <p>Managed by Charutar Vidyamandal</p>
      </div>
    </div>
  )
}

export default BvmInfo
