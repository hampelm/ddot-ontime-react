import React, { PropTypes } from 'react'
import './Trip.css'

const Trip = ({ tripId, tripHeadsign, lastUpdateTime, scheduleDeviation }) => (
  <tr className="trip">
    <td>{tripId}</td>
    <td>{tripHeadsign}</td>
    <td>{lastUpdateTime}</td>
    <td className="refreshes">{scheduleDeviation}</td>
  </tr>
)

Trip.propTypes = {
  tripId: PropTypes.string.isRequired,
  tripHeadsign: PropTypes.string,
  lastUpdateTime: PropTypes.number,
  scheduleDeviation: PropTypes.number
}

export default Trip
