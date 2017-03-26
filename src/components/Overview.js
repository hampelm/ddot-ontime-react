import React, { PropTypes } from 'react'
import './Overview.css'

const Overview = ({ early, ontime, late, notTracked }) => (
  <div className="stats">
    <div className="early">
      <h2>Early</h2>
      {early}
    </div>
    <div className="ontime">
      <h2>On time</h2>
      {ontime}
    </div>
    <div className="late">
      <h2>Late</h2>
      {late}
    </div>
    <div className="notTracked">
      <h2>Not tracked</h2>
      {notTracked}
    </div>
  </div>
)

Overview.propTypes = {
  early:      PropTypes.number,
  ontime:     PropTypes.number,
  late:       PropTypes.number,
  notTracked: PropTypes.number
}

export default Overview
